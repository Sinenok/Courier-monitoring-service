using CourierMicroservice.Services.CourierService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierMicroservice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CourierController : ControllerBase
{
    private readonly ICourierService _courierService;

    public CourierController(ICourierService courierService) => _courierService = courierService;

    [Authorize(Roles = "Courier,Admin")]
    [HttpPost("complete-order")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> CompleteOrder(Guid orderId, CancellationToken cancellationToken)
    {
        var result = await _courierService.CompleteOrder(orderId, cancellationToken);
        return Ok(result);
    }

    [Authorize(Roles = "Courier,Admin,User")]
    [HttpPost("get-courier-coordinates")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> GetCourierCoordinates(Guid orderId, CancellationToken cancellationToken)
    {
        var result = await _courierService.GetCourierCoordinates(orderId, cancellationToken);
        return Ok(result);
    }

    [Authorize(Roles = "Courier,Admin")]
    [HttpGet("courier-orders")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> GetCreatedOrders(int statusId, int? skip, int? take, CancellationToken cancellationToken)
    {
        var result = await _courierService.GetCourierOrders(statusId, skip, take, cancellationToken);
        return Ok(result);
    }

    [Authorize(Roles = "Courier,Admin")]
    [HttpGet("orders")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> GetOrders(int statusId, int? skip, int? take, CancellationToken cancellationToken)
    {
        var result = await _courierService.GetOrders(statusId, skip, take, cancellationToken);
        return Ok(result);
    }

    [Authorize(Roles = "Courier,Admin")]
    [HttpPost("take-order")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> TakeOrder(Guid orderId, CancellationToken cancellationToken)
    {
        var result = await _courierService.TakeOrder(orderId, cancellationToken);
        return Ok(result);
    }
}
