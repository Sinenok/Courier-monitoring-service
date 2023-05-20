using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models.Dictionaries;

/// <summary>
/// Представляет сущность метода оплаты заказа.
/// </summary>
public class PaymentMethod : Entity<SequentialGuid>
{
    public PaymentMethod(SequentialGuid id, string name, int code)
        : base(id)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Code = code;
    }

    /// <summary>
    /// Возвращает код метода оплаты.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название метода оплаты.
    /// </summary>
    public string Name { get; set; }
}
