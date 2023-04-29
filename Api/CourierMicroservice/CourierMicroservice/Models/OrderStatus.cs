namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность статуса заказа.
/// </summary>
public class OrderStatus : BaseAuditEntity
{
    /// <summary>
    /// Возвращает код статуса.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название статуса.
    /// </summary>
    public string Name { get; set; }
}
