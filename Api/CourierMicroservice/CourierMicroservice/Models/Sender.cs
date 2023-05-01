using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность отправителя.
/// </summary>
public class Sender : Entity<SequentialGuid>
{
    public Sender(SequentialGuid id, User user)
        : base(id) =>
        User = user;

    protected Sender()
        : base(SequentialGuid.Empty) =>
        User = null!;

    /// <summary>
    /// Возвращает адрес отправителя.
    /// </summary>
    public string SenderAddress { get; set; }

    /// <summary>
    /// Возвращает имя отправителя.
    /// </summary>
    public string SenderName { get; set; }

    /// <summary>
    /// Возвращает пользователя.
    /// </summary>
    public User User { get; set; }
}
