using CourierMicroservice.Dtos;
using CourierMicroservice.Services.OrderService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CourierMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("create-order")]
        public async Task<ActionResult> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken) 
        {
            var result = await _orderService.CreateOrder(orderDto, cancellationToken);
            return Ok(result);
        }

        [HttpGet("get-payment-methods")]
        public async Task<ActionResult> GetPaymentMethods(CancellationToken cancellationToken) 
        {
            var result = await _orderService.GetPaymentMethods(cancellationToken);
            return Ok(result);
        }
    }
}
