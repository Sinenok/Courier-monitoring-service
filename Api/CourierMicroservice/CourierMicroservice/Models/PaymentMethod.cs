namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с информацией о методе оплаты заказа
/// </summary>
public class PaymentMethod : BaseAuditEntity
{
    /// <summary>
    /// Название метода оплаты 
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Код метода оплаты
    /// </summary>
    public int Code { get; set; }
}
