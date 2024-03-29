﻿namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет заказ.
/// </summary>
/// <param name="SenderName">Идентификатор отправления.</param>
/// <param name="SenderName">Имя отправителя.</param>
/// <param name="SenderAddress">Адрес отправителя.</param>
/// <param name="ReceiverName">Имя получателя.</param>
/// <param name="ReceiverAddress">Адрес получателя.</param>
/// <param name="DeliveryCost">Стоимость доставки.</param>
/// <param name="PaymentMethod">Метод оплаты.</param>
/// <param name="ProductCost">Стоимость посылки.</param>
/// <param name="ProductDescription">Описание посылки.</param>
/// <param name="ProductWeight">Вес посылки.</param>
/// <param name="OrderStatus">Статус заказа.</param>
/// <param name="TrackNumber">Трек номер.</param>
public record OrderDto(Guid OrderId,
                       string SenderName,
                       string SenderAddress,
                       string ReceiverName,
                       string ReceiverAddress,
                       decimal DeliveryCost,
                       int PaymentMethod,
                       decimal ProductCost,
                       string ProductDescription,
                       decimal ProductWeight,
                       int OrderStatus,
                       Guid TrackNumber);
