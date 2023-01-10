namespace CourierMicroservice.Models;

/// <summary>
/// Сущность с заказом
/// </summary>
public class Order : BaseAuditEntity
{
    /// <summary>
    /// Имя отправителя  
    /// </summary>
    public string SenderName { get; set; }

    /// <summary>
    /// Адресс отправителя  
    /// </summary>
    public string SenderAdress { get; set; }

    /// <summary>
    /// Имя получателя  
    /// </summary>
    public string ReceiverName { get; set; }

    /// <summary>
    /// Адресс получателя  
    /// </summary>
    public string ReceiverAdress { get; set; }

    /// <summary>
    /// Трек номер  
    /// </summary>
    public string TrackNumber { get; set; }

    /// <summary>
    /// Дата доставки
    /// </summary>
    public string DeliveryDate { get; set; }

    /// <summary>
    /// Стоимость доставки
    /// </summary>
    public float DeliveryCost { get; set; }

    /// <summary>
    /// Оценка доставки
    /// </summary>
    public int DeliveryScore { get; set; }

    /// <summary>
    /// Метод оплаты заказа
    /// </summary>
    public PaymentMethod? PaymentMethod { get; set; }

    /// <summary>
    /// Информация о послылке
    /// </summary>
    public PackageInformation? PackageInformation { get; set; }

    /// <summary>
    /// Информация о статусе заказа
    /// </summary>
    public OrderStatus? OrderStatus { get; set; }

    /// <summary>
    /// Информация об отправителе
    /// </summary>
    public User? SenderUser { get; set; }

    /// <summary>
    /// Информация об получателе
    /// </summary>
    public User? ReceiverUser { get; set; }
}
