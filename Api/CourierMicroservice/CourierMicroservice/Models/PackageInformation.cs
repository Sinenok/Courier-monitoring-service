namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с информацией о посылке
/// </summary>
public class PackageInformation : BaseAuditEntity
{
    /// <summary>
    /// Краткое описание
    /// </summary>
    public string ShortDescription { get; set; }

    /// <summary>
    /// Вес
    /// </summary>
    public string Weight { get; set; }

    /// <summary>
    /// Цена
    /// </summary>
    public float Cost { get; set; }
}
