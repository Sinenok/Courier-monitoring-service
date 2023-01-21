using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using CourierMicroservice.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace CourierMicroservice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly AppDbContext _dbContext;
    private readonly IUserService _userService;

    public AuthController(IConfiguration configuration, AppDbContext productContext, IUserService userService)
    {
        _configuration = configuration;
        _userService = userService;
        _dbContext = productContext;
    }

    [HttpGet]
    [Authorize]
    public ActionResult<string> GetMe()
    {
        var userName = _userService.GetMyName();
        return Ok(userName);
    }

    [HttpPost("login")]
    public async Task<ActionResult<string>> Login(UserDto request)
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == request.Username);

        if (user == null)
        {
            return BadRequest("User not found.");
        }

        if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
        {
            return BadRequest("Wrong password.");
        }

        var token = CreateToken(user);

        var refreshToken = GenerateRefreshToken();
        SetRefreshToken(refreshToken, user);

        await _dbContext.SaveChangesAsync();

        return Ok(token);
    }

    [HttpPost("refresh-token")]
    public async Task<ActionResult<string>> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"];
        var accessToken = Request.Cookies["accessToken"];

        var stream = accessToken;
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(stream);
        var tokenS = jsonToken as JwtSecurityToken;

        var jti = tokenS.Claims.First(claim => claim.Type == ClaimTypes.Name)
                        .Value;

        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == jti);

        if (!user.RefreshToken.Equals(refreshToken))
        {
            return Unauthorized("Invalid Refresh Token.");
        }

        if (user.TokenExpires < DateTime.Now)
        {
            return Unauthorized("Token expired.");
        }

        var token = CreateToken(user);
        var newRefreshToken = GenerateRefreshToken();
        SetRefreshToken(newRefreshToken, user);
        await _dbContext.SaveChangesAsync();

        return Ok(token);
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserDto request)
    {
        CreatePasswordHash(request.Password, out var passwordHash, out var passwordSalt);

        await _dbContext.Users.AddAsync(new User
        {
            Id = Guid.NewGuid(),
            Username = request.Username,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt
        });

        await _dbContext.SaveChangesAsync();

        return Ok();
    }

    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512())
        {
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
    }

    private string CreateToken(User user)
    {
        List<Claim> claims = new() { new Claim(ClaimTypes.Name, user.Username), new Claim(ClaimTypes.Role, "Admin") };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token")
            .Value));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token = new JwtSecurityToken(claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: creds);

        var cookieOptions = new CookieOptions { HttpOnly = true };

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        Response.Cookies.Append("accessToken", jwt, cookieOptions);

        return jwt;
    }

    private RefreshToken GenerateRefreshToken()
    {
        var refreshToken = new RefreshToken
        {
            Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
            Expires = DateTime.SpecifyKind(DateTime.Now.AddDays(7), DateTimeKind.Utc),
            Created = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc)
        };

        return refreshToken;
    }

    private void SetRefreshToken(RefreshToken newRefreshToken, User user)
    {
        var cookieOptions = new CookieOptions { HttpOnly = true, Expires = newRefreshToken.Expires };
        Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

        user.RefreshToken = newRefreshToken.Token;
        user.TokenCreated = newRefreshToken.Created;
        user.TokenExpires = newRefreshToken.Expires;
    }

    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512(passwordSalt))
        {
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(passwordHash);
        }
    }
}