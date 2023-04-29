namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность заказа.
/// </summary>
public class Order : BaseAuditEntity
{
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
    public string ReceiverAdress { get; set; }

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
    public string SenderAdress { get; set; }

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
