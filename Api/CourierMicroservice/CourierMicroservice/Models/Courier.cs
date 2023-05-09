using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность курьера.
/// </summary>
public class Courier : Entity<SequentialGuid>
{
    public Courier(SequentialGuid id, User user)
        : base(id) =>
        User = user ?? throw new ArgumentNullException(nameof(user));

    /// <summary>
    /// Инициализирует новый экземпляр типа <see cref="Courier" />.
    /// </summary>
    /// <remarks>Конструктор для EF.</remarks>
    protected Courier()
        : base(SequentialGuid.Empty) =>
        User = null!;

    /// <summary>
    /// Возвращает пользователя.
    /// </summary>
    public virtual User User { get; }
}
