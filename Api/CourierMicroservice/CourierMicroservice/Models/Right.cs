namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с правами пользователя
/// </summary>
public class Right : BaseAuditEntity
{
    /// <summary>
    /// Название доступа
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Код доступа
    /// </summary>
    public int Code { get; set; }
}