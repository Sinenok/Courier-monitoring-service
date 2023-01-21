using CourierMicroservice.Models;
using CourierMicroservice.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace CourierMicroservice.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthorizationController : ControllerBase
{
    private readonly Services.IAuthorizationService _service;

    public AuthorizationController(Services.IAuthorizationService service) => _service = service;

    [Route("[action]")]
    [HttpGet, Authorize(Roles = "Admin")]
    public async Task<ActionResult<List<User>>> GetUsers(CancellationToken cancellationToken)
    {
        var result = await _service.GetUsers(cancellationToken);
        return Ok(result);
    }

    [Route("[action]")]
    [HttpGet]
    public async Task<ActionResult<List<User>>> QQQQ(CancellationToken cancellationToken)
    {
        var result = await _service.QQQQ(cancellationToken);
        return Ok(result);
    }
}
