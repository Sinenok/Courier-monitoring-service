namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет сущность заказа.
/// </summary>
/// <param name="SenderName"></param>
/// <param name="SenderAddress"></param>
/// <param name="ReceiverName"></param>
/// <param name="ReceiverAddress"></param>
/// <param name="DeliveryCost"></param>
/// <param name="PaymentMethod"></param>
/// <param name="ProductCost"></param>
/// <param name="ProductDescription"></param>
/// <param name="ProductWeight"></param>
public record OrderDto(string SenderName,
                       string SenderAddress,
                       string ReceiverName,
                       string ReceiverAddress,
                       decimal DeliveryCost,
                       int PaymentMethod,
                       decimal ProductCost,
                       string ProductDescription,
                       decimal ProductWeight);
