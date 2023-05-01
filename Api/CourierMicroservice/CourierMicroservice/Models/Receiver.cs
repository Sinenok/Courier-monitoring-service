using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность получателя.
/// </summary>
public class Receiver : Entity<SequentialGuid>
{
    public Receiver(SequentialGuid id, User user)
        : base(id) =>
        User = user;

    protected Receiver()
        : base(SequentialGuid.Empty) =>
        User = null!;

    /// <summary>
    /// Возвращает пользователя.
    /// </summary>
    public User User { get; set; }
    
    /// <summary>
    /// Возвращает адрес получателя.
    /// </summary>
    public string ReceiverAddress { get; set; }
    
    /// <summary>
    /// Возвращает имя получателя.
    /// </summary>
    public string ReceiverName { get; set; }

}
