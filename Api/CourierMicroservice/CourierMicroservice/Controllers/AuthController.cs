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
    public async Task<ActionResult<TokenResultDto>> Login(UserLoginDto request)
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Login == request.Login);

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
        return Ok(new TokenResultDto() { AccessToken = token });
    }

    [HttpPost("refresh-token")]
    public async Task<ActionResult<string>> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"];
        var accessToken = Request.Cookies["accessToken"];
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(accessToken);

        if (jsonToken is not JwtSecurityToken tokens)
        {
            return Unauthorized("Wrong token.");
        }

        var jti = tokens.Claims.First(claim => claim.Type == ClaimTypes.Name)
                        .Value;
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Login == jti);

        if (user == null)
        {
            return Unauthorized("Cannot find user.");
        }

        if (!user.RefreshToken.Equals(refreshToken))
        {
            return Unauthorized("Invalid refresh token.");
        }

        if (user.TokenExpires < DateTime.Now)
        {
            return Unauthorized("Token expired.");
        }

        var token = CreateToken(user);

        if (string.IsNullOrEmpty(token))
        {
            return Unauthorized("CreateToken error.");
        }

        var newRefreshToken = GenerateRefreshToken();
        SetRefreshToken(newRefreshToken, user);
        await _dbContext.SaveChangesAsync();
        return Ok(token);
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserRegistrationDto request)
    {
        var isUserExist = await _dbContext.Users.AnyAsync(u => u.Login == request.Login);

        if (isUserExist)
        {
            return Conflict("User with current login exist.");
        }

        CreatePasswordHash(request.Password, out var passwordHash, out var passwordSalt);
        var userRight = await _dbContext.Rights.FirstAsync(c => c.Name == "User");

        await _dbContext.Users.AddAsync(new User
        {
            Id = Guid.NewGuid(),
            FirstName = request.FirstName,
            LastName = request.LastName,
            Mail = request.Mail,
            Phone = request.Phone,
            Login = request.Login,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
            Right = userRight
        });
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using var hmac = new HMACSHA512();
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
    }

    private string CreateToken(User user)
    {
        List<Claim> claims = new()
        {
            new Claim(ClaimTypes.Name, user.Login),
            new Claim(ClaimTypes.Role, "User")
        };

        var value = _configuration.GetSection("AppSettings:Token")
                                  .Value;

        if (value == null)
        {
            return string.Empty;
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(value));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        var token = new JwtSecurityToken(claims: claims, expires: DateTime.Now.AddDays(1), signingCredentials: credentials);

        var cookieOptions = new CookieOptions
        {
            HttpOnly = true
        };
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        Response.Cookies.Append("accessToken", jwt, cookieOptions);
        return jwt;
    }

    private static RefreshToken GenerateRefreshToken()
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
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = newRefreshToken.Expires
        };
        Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
        user.RefreshToken = newRefreshToken.Token;
        user.TokenCreated = newRefreshToken.Created;
        user.TokenExpires = newRefreshToken.Expires;
    }

    private static bool VerifyPasswordHash(string password, IEnumerable<byte> passwordHash, byte[] passwordSalt)
    {
        using var hmac = new HMACSHA512(passwordSalt);
        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        return computedHash.SequenceEqual(passwordHash);
    }
}
