using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность метода оплаты заказа.
/// </summary>
public class PaymentMethod : Entity<SequentialGuid>
{
    public PaymentMethod(SequentialGuid id, string name)
        : base(id) =>
        Name = name;

    protected PaymentMethod()
        : base(SequentialGuid.Empty) =>
        Name = null!;

    /// <summary>
    /// Возвращает код метода оплаты.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название метода оплаты.
    /// </summary>
    public string Name { get; set; }
}
