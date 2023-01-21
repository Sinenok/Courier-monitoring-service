namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с правами пользователя
/// </summary>
public class Right : BaseAuditEntity
{
    /// <summary>
    /// Код доступа
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Название доступа
    /// </summary>
    public string Name { get; set; }
}
