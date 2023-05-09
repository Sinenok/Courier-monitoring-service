namespace CourierMicroservice.Dtos;

public record FullOrderInfo(string SenderName,
                            string SenderAddress,
                            string ReceiverName,
                            string ReceiverAddress,
                            decimal DeliveryCost,
                            int PaymentMethod,
                            decimal ProductCost,
                            string ProductDescription,
                            decimal ProductWeight);
