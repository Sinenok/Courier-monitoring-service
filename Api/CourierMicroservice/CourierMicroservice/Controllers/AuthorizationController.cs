using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using IAuthorizationService = CourierMicroservice.Services.AuthorizationService.IAuthorizationService;

namespace CourierMicroservice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthorizationController : ControllerBase
{
    private readonly IAuthorizationService _authorizationService;

    public AuthorizationController(IAuthorizationService authorizationService) => _authorizationService = authorizationService;

    [Authorize]
    [HttpGet("current-user")]
    public ActionResult GetUserInfo()
    {
        var userName = _authorizationService.GetUserInfo();
        return Ok(userName);
    }

    [HttpPost("login")]
    public async Task<ActionResult<TokenResultDto>> Login(UserLoginDto request, CancellationToken cancellationToken)
    {
        var token = await _authorizationService.Login(request, cancellationToken);

        return Ok(new TokenResultDto(token));
    }

    [Authorize]
    [HttpPost("refresh-token")]
    public async Task<ActionResult<string>> RefreshToken(CancellationToken cancellationToken)
    {
        var token = await _authorizationService.RefreshToken(cancellationToken);
        return Ok(token);
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserRegistrationDto request, CancellationToken cancellationToken)
    {
        await _authorizationService.Register(request, cancellationToken);
        return Ok();
    }
}
