using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierMicroservice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthorizationController : ControllerBase
{
    private readonly Services.AuthorizationService.IAuthorizationService _authorizationService;

    public AuthorizationController(Services.AuthorizationService.IAuthorizationService authorizationService)
    {
        _authorizationService = authorizationService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register(UserRegistrationDto request, CancellationToken cancellationToken)
    {
        await _authorizationService.Register(request, cancellationToken);
        return Ok();
    }

    [HttpPost("login")]
    public async Task<ActionResult<TokenResultDto>> Login(UserLoginDto request, CancellationToken cancellationToken)
    {
        var token = await _authorizationService.Login(request, cancellationToken);
        return Ok(new TokenResultDto() { AccessToken = token });
    }

    [Authorize]
    [HttpPost("refresh-token")]
    public async Task<ActionResult<string>> RefreshToken(CancellationToken cancellationToken)
    {
        var token = await _authorizationService.RefreshToken(cancellationToken);
        return Ok(token);
    }

    [Authorize]
    [HttpGet("current-user")]
    public ActionResult<string> GetMe()
    {
        var userName = _authorizationService.GetMyName();
        return Ok(userName);
    }
}
