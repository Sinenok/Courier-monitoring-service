﻿using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace CourierMicroservice.Services.AuthorizationService;

public class AuthorizationService : IAuthorizationService
{
    private readonly IHttpContextAccessor _contextAccessor;
    private readonly IConfiguration _configuration;
    private readonly AppDbContext _dbContext;

    public AuthorizationService(IHttpContextAccessor contextAccessor, IConfiguration configuration, AppDbContext productContext)
    {
        _contextAccessor = contextAccessor;
        _configuration = configuration;
        _dbContext = productContext;
    }

    public async Task Register(UserRegistrationDto request, CancellationToken cancellationToken)
    {
        var isUserExist = await _dbContext.Users.AnyAsync(u => u.Login == request.Login, cancellationToken);

        if (isUserExist)
        {
            throw new ArgumentException("User with current login exist.");
        }

        CreatePasswordHash(request.Password, out var passwordHash, out var passwordSalt);
        var userRight = await _dbContext.Rights.FirstAsync(c => c.Name == "User", cancellationToken);

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
        }, cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<string> Login(UserLoginDto request, CancellationToken cancellationToken)
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Login == request.Login, cancellationToken);

        if (user == null)
        {
            throw new BadHttpRequestException("User not found.");
        }

        if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
        {
            throw new BadHttpRequestException("Wrong password.");
        }

        var token = CreateToken(user);
        var refreshToken = GenerateRefreshToken();

        SetRefreshToken(refreshToken, user);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return token;
    }

    public async Task<string> RefreshToken(CancellationToken cancellationToken)
    {
        var refreshToken = _contextAccessor?.HttpContext?.Request.Cookies["refreshToken"];
        var accessToken = _contextAccessor?.HttpContext?.Request.Cookies["accessToken"];
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(accessToken);

        if (jsonToken is not JwtSecurityToken tokens)
        {
            throw new UnauthorizedAccessException("Wrong token.");
        }

        var jti = tokens.Claims.First(claim => claim.Type == ClaimTypes.Name)
                        .Value;
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Login == jti, cancellationToken);

        if (user == null)
        {
            throw new UnauthorizedAccessException("Cannot find user.");
        }

        if (!user.RefreshToken.Equals(refreshToken))
        {
            throw new UnauthorizedAccessException("Invalid refresh token.");
        }

        if (user.TokenExpires < DateTime.Now)
        {
            throw new UnauthorizedAccessException("Token expired.");
        }

        var token = CreateToken(user);

        if (string.IsNullOrEmpty(token))
        {
            throw new UnauthorizedAccessException("CreateToken error.");
        }

        var newRefreshToken = GenerateRefreshToken();
        SetRefreshToken(newRefreshToken, user);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return token;
    }

    private void SetRefreshToken(RefreshToken newRefreshToken, User user)
    {
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = newRefreshToken.Expires
        };
        _contextAccessor?.HttpContext?.Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
        user.RefreshToken = newRefreshToken.Token;
        user.TokenCreated = newRefreshToken.Created;
        user.TokenExpires = newRefreshToken.Expires;
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
            HttpOnly = false
        };
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        _contextAccessor?.HttpContext?.Response.Cookies.Append("accessToken", jwt, cookieOptions);
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

    private static bool VerifyPasswordHash(string password, IEnumerable<byte> passwordHash, byte[] passwordSalt)
    {
        using var hmac = new HMACSHA512(passwordSalt);
        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        return computedHash.SequenceEqual(passwordHash);
    }

    private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using var hmac = new HMACSHA512();
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
    }

    public string? GetMyName()
    {
        var result = string.Empty;

        if (_contextAccessor.HttpContext != null)
        {
            result = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }

        return result;
    }
}
