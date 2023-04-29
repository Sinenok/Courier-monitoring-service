namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность метода оплаты заказа.
/// </summary>
public class PaymentMethod : BaseAuditEntity
{
    /// <summary>
    /// Возвращает код метода оплаты.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название метода оплаты.
    /// </summary>
    public string Name { get; set; }
}
