using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность прав пользователя.
/// </summary>
public class Right : Entity<SequentialGuid>
{
    public Right(SequentialGuid id, string name, int code)
        : base(id)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Code = code;
    }

    /// <summary>
    /// Возвращает код доступа.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название доступа.
    /// </summary>
    public string Name { get; set; }
}
