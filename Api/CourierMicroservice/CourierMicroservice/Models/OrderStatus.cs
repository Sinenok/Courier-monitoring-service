using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность статуса заказа.
/// </summary>
public class OrderStatus : Entity<SequentialGuid>
{
    public OrderStatus(SequentialGuid id, string name)
        : base(id) =>
        Name = name;

    protected OrderStatus()
        : base(SequentialGuid.Empty) =>
        Name = null!;

    /// <summary>
    /// Возвращает код статуса.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название статуса.
    /// </summary>
    public string Name { get; set; }
}
