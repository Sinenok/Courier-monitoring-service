using CourierMicroservice.Dtos;
using CourierMicroservice.Models;

namespace CourierMicroservice.Services.OrderService
{
    /// <summary>
    /// Представляет сервис заказа
    /// </summary>
    public interface IOrderService
    {
        public Task<string> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken);
        public Task<List<PaymentMethod>> GetPaymentMethods(CancellationToken cancellationToken);

    }
}
