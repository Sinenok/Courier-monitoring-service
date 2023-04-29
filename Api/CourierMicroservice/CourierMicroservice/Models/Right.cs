namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность прав пользователя.
/// </summary>
public class Right : BaseAuditEntity
{
    /// <summary>
    /// Возвращает код доступа.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название доступа.
    /// </summary>
    public string Name { get; set; }
}
