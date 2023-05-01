using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность заказа.
/// </summary>
public class Order : Entity<SequentialGuid>
{
    public Order(SequentialGuid id, string deliveryDate, string receiverAddress, string receiverName, string senderAddress, string senderName, string trackNumber)
        : base(id)
    {
        DeliveryDate = deliveryDate;
        ReceiverAddress = receiverAddress;
        ReceiverName = receiverName;
        SenderAddress = senderAddress;
        SenderName = senderName;
        TrackNumber = trackNumber;
    }

    protected Order()
        : base(SequentialGuid.Empty)
    {
        DeliveryDate = null!;
        ReceiverAddress = null!;
        ReceiverName = null!;
        SenderAddress = null!;
        SenderName = null!;
        TrackNumber = null!;
    }

    /// <summary>
    /// Возвращает информацию о курьере.
    /// </summary>
    public Courier? Courier { get; set; }


    /// <summary>
    /// Возвращает информацию о статусе заказа.
    /// </summary>
    public OrderStatus? OrderStatus { get; set; }

    /// <summary>
    /// Возвращает информацию о посылке.
    /// </summary>
    public PackageInformation? PackageInformation { get; set; }

    /// <summary>
    /// Возвращает метод оплаты заказа.
    /// </summary>
    public PaymentMethod? PaymentMethod { get; set; }

    /// <summary>
    /// Возвращает информацию об получателе.
    /// </summary>
    public Receiver? Receiver { get; set; }

    /// <summary>
    /// Возвращает информацию об отправителе.
    /// </summary>
    public Sender? Sender { get; set; }

    /// <summary>
    /// Возвращает трек номер.
    /// </summary>
    public string TrackNumber { get; set; }
}
