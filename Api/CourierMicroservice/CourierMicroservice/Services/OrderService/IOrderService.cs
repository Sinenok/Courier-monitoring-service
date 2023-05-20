using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;
using CourierMicroservice.Models.Dictionaries;

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
    /// Получение заказов в статусе создано.
    /// </summary>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<DataResult<CourierOrderDto>> GetCreatedOrders(int? skip, int? take, CancellationToken cancellationToken);

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
    public IEnumerable<PaymentMethod> GetPaymentMethods();

    /// <summary>
    /// Получение заказов пользователя.
    /// </summary>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<DataResult<OrderDto>> GetUserSentOrders(int? skip, int? take, CancellationToken cancellationToken);
}
