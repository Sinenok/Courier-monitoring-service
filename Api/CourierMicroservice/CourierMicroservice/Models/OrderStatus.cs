using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность статуса заказа.
/// </summary>
public class OrderStatus : Entity<SequentialGuid>
{
    public OrderStatus(SequentialGuid id, string name, int code)
        : base(id)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Code = code;
    }

    /// <summary>
    /// Возвращает код статуса.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название статуса.
    /// </summary>
    public string Name { get; set; }
}
