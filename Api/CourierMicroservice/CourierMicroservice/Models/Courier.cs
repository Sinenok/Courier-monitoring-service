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
        User = user;

    protected Courier()
        : base(SequentialGuid.Empty) =>
        User = null!;

    /// <summary>
    /// Возвращает стоимость доставки.
    /// </summary>
    public float DeliveryCost { get; set; }

    /// <summary>
    /// Возвращает дату доставки.
    /// </summary>
    public string DeliveryDate { get; set; }
 
    /// <summary>
    /// Возвращает оценку доставки.
    /// </summary>
    public int DeliveryScore { get; set; }

    /// <summary>
    /// Возвращает пользователя.
    /// </summary>
    public User User { get; set; }
}
