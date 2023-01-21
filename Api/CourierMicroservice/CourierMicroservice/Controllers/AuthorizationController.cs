using CourierMicroservice.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using IAuthorizationService = CourierMicroservice.Services.IAuthorizationService;

namespace CourierMicroservice.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthorizationController : ControllerBase
{
    private readonly IAuthorizationService _service;

    public AuthorizationController(IAuthorizationService service) => _service = service;

    [Route("[action]")]
    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<List<User>>> GetUsers(CancellationToken cancellationToken)
    {
        var result = await _service.GetUsers(cancellationToken);
        return Ok(result);
    }
}
