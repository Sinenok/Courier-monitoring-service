namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность с информацией о посылке.
/// </summary>
public class PackageInformation : BaseAuditEntity
{
    /// <summary>
    /// Возвращает цену.
    /// </summary>
    public float Cost { get; set; }

    /// <summary>
    /// Возвращает краткое описание.
    /// </summary>
    public string ShortDescription { get; set; }

    /// <summary>
    /// Возвращает вес.
    /// </summary>
    public string Weight { get; set; }
}
