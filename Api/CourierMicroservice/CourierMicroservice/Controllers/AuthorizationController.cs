using CourierMicroservice.Models;
using CourierMicroservice.Services;
using Microsoft.AspNetCore.Mvc;

namespace CourierMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase
    {
        private readonly IAuthorizationService _service;

        public AuthorizationController(IAuthorizationService service)
        {
            _service = service;
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers(CancellationToken cancellationToken)
        {
            var result = await _service.GetUsers(cancellationToken);

            return Ok(result);
        }
    }
}