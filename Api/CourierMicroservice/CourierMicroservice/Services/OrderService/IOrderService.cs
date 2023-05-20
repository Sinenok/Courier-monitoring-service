using CourierMicroservice.Dtos;
using CourierMicroservice.Models;

namespace CourierMicroservice.Services.OrderService;

/// <summary>
/// Представляет сервис заказа
/// </summary>
public interface IOrderService
{
    /// <summary>
    /// Создает заказ.
    /// </summary>
    /// <param name="orderDto"></param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<Guid> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken);

    /// <summary>
    /// Получение заказа по идентификатору.
    /// </summary>
    /// <param name="trackNumber"></param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<OrderDto> GetOrder(Guid trackNumber, CancellationToken cancellationToken);

    /// <summary>
    /// Получение вариантов метода оплаты.
    /// </summary>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<List<PaymentMethod>> GetPaymentMethods(CancellationToken cancellationToken);
}
