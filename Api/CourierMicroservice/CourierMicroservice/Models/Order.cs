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
    public User? CourierUser { get; set; }

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
    /// Возвращает адрес получателя.
    /// </summary>
    public string ReceiverAddress { get; set; }

    /// <summary>
    /// Возвращает имя получателя.
    /// </summary>
    public string ReceiverName { get; set; }

    /// <summary>
    /// Возвращает информацию об получателе.
    /// </summary>
    public User? ReceiverUser { get; set; }

    /// <summary>
    /// Возвращает адрес отправителя.
    /// </summary>
    public string SenderAddress { get; set; }

    /// <summary>
    /// Возвращает имя отправителя.
    /// </summary>
    public string SenderName { get; set; }

    /// <summary>
    /// Возвращает информацию об отправителе.
    /// </summary>
    public User? SenderUser { get; set; }

    /// <summary>
    /// Возвращает трек номер.
    /// </summary>
    public string TrackNumber { get; set; }
}
