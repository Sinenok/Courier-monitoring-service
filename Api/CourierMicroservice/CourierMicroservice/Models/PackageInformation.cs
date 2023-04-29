using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность с информацией о посылке.
/// </summary>
public class PackageInformation : Entity<SequentialGuid>
{
    public PackageInformation(SequentialGuid id, string shortDescription, string weight)
        : base(id)
    {
        ShortDescription = shortDescription;
        Weight = weight;
    }

    protected PackageInformation()
        : base(SequentialGuid.Empty)
    {
        ShortDescription = null!;
        Weight = null!;
    }

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
