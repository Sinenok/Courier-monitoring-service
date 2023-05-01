namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет сущность заказа.
/// </summary>
/// <param name="ReceiverAddress"></param>
/// <param name="ReceiverName"></param>
/// <param name="SenderAddress"></param>
/// <param name="SenderName"></param>
public record OrderDto(string ReceiverAddress, string ReceiverName, string SenderAddress, string SenderName);
