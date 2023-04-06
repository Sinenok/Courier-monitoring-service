using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly AppDbContext _appDbContext;
        public OrderService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<string> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken)
        {
            var orderId = Guid.NewGuid();
            var order = new Order()
            {
                Id = orderId,
                DeliveryCost = 10,
                TrackNumber = "qwe",
                DeliveryScore = 15,
                ReceiverAdress = orderDto.ReceiverAdress,
                ReceiverName = orderDto.ReceiverName,
                SenderAdress = orderDto.SenderAdress,
                SenderName = orderDto.SenderName,
                DeliveryDate = DateTime.UtcNow.AddDays(-10).ToString(),
            };
            _appDbContext.Add(order);
            await _appDbContext.SaveChangesAsync(cancellationToken);
            return orderId.ToString();
        }

        public async Task<List<PaymentMethod>> GetPaymentMethods(CancellationToken cancellationToken)
        {
            var result = await _appDbContext.PaymentMethods.ToListAsync(cancellationToken);
            return result;
        }
    }
}
