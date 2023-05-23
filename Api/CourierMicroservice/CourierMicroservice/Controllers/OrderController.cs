using CourierMicroservice.Dtos;
using CourierMicroservice.Services.OrderService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierMicroservice.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrderController(IOrderService orderService) => _orderService = orderService;

    [Authorize(Roles = "User,Admin")]
    [HttpPost("create-order")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken)
    {
        var result = await _orderService.CreateOrder(orderDto, cancellationToken);
        return Ok(result);
    }

    [HttpGet("order-info/{trackNumber:guid}")]
    public async Task<ActionResult> GetOrder(Guid trackNumber, CancellationToken cancellationToken)
    {
        var result = await _orderService.GetOrder(trackNumber, cancellationToken);
        return Ok(result);
    }

    [Authorize]
    [HttpGet("get-payment-methods")]
    public ActionResult GetPaymentMethods()
    {
        var result = _orderService.GetPaymentMethods();
        return Ok(result);
    }
}
