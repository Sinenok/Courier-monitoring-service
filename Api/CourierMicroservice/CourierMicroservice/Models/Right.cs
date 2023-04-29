using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность прав пользователя.
/// </summary>
public class Right : Entity<SequentialGuid>
{
    public Right(SequentialGuid id, string name)
        : base(id) =>
        Name = name;

    protected Right()
        : base(SequentialGuid.Empty) =>
        Name = null!;

    /// <summary>
    /// Возвращает код доступа.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название доступа.
    /// </summary>
    public string Name { get; set; }
}
