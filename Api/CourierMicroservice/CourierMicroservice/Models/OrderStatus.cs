namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с информацией о статусе заказа
/// </summary>
public class OrderStatus : BaseAuditEntity
{
    /// <summary>
    /// Название статуса 
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Код статуса 
    /// </summary>
    public int Code { get; set; }
}
