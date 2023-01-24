namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с информацией о статусе заказа
/// </summary>
public class OrderStatus : BaseAuditEntity
{
    /// <summary>
    /// Код статуса
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Название статуса
    /// </summary>
    public string Name { get; set; }
}
