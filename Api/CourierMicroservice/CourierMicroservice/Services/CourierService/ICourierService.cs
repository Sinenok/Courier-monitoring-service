using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;

namespace CourierMicroservice.Services.CourierService;

/// <summary>
/// Представляет сервис курьеров.
/// </summary>
public interface ICourierService
{
    /// <summary>
    /// Завершение заказа.
    /// </summary>
    /// <param name="orderId">Идентификатор заказа.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<Guid> CompleteOrder(Guid orderId, CancellationToken cancellationToken);

    /// <summary>
    /// Получение заказов в статусе создано.
    /// </summary>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<DataResult<CourierOrderDto>> GetCreatedOrders(int? skip, int? take, CancellationToken cancellationToken);

    /// <summary>
    /// Взятие заказа в работу.
    /// </summary>
    /// <param name="orderId">Идентификатор заказа.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<Guid> TakeOrder(Guid orderId, CancellationToken cancellationToken);
}
