namespace CourierMicroservice.Dtos;

public record OrderDto(string ReceiverAddress, string ReceiverName, string SenderAddress, string SenderName);
