namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет заказ курьера.
/// </summary>
/// <param name="OrderId">Уникальный идентификатор заказа.</param>
/// <param name="SenderName">Имя отправителя.</param>
/// <param name="SenderAddress">Адрес отправителя.</param>
/// <param name="ReceiverName">Имя получателя.</param>
/// <param name="ReceiverAddress">Адрес получателя.</param>
/// <param name="DeliveryCost">Стоимость доставки.</param>
/// <param name="PaymentMethod">Метод оплаты.</param>
/// <param name="ProductWeight">Вес посылки.</param>
public record CourierOrderDto(Guid OrderId,
                              string SenderName,
                              string SenderAddress,
                              string ReceiverName,
                              string ReceiverAddress,
                              decimal DeliveryCost,
                              int PaymentMethod,
                              decimal ProductWeight);
