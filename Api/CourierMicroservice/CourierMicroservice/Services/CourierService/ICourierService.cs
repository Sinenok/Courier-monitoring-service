using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;

namespace CourierMicroservice.Services.CourierService;

/// <summary>
/// Представляет сервис курьеров.
/// </summary>
public interface ICourierService
{
    /// <summary>
    /// Получение заказов в статусе создано.
    /// </summary>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public Task<DataResult<CourierOrderDto>> GetCreatedOrders(int? skip, int? take, CancellationToken cancellationToken);
}
