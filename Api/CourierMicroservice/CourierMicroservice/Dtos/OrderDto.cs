﻿namespace CourierMicroservice.Dtos
{
    public class OrderDto
    {
        public string SenderName { get; set; }
        public string SenderAddress { get; set; }
        public string ReceiverName { get; set; }
        public string ReceiverAddress { get; set; }
    }
}