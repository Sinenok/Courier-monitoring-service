using System.Globalization;
using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using CourierMicroservice.Models.Core.Primitives;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services.OrderService;

public class OrderService : IOrderService
{
    private readonly AppDbContext _appDbContext;

    public OrderService(AppDbContext appDbContext) => _appDbContext = appDbContext;

    public async Task<string> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken)
    {
        var orderId = SequentialGuid.Create();

        var deliveryDate = DateTime.UtcNow.AddDays(-10)
                                   .ToString(CultureInfo.InvariantCulture);

        var order = new Order(orderId, deliveryDate, orderDto.ReceiverAddress, orderDto.ReceiverName, orderDto.SenderAddress, orderDto.SenderName, "qwe")
        {
            DeliveryCost = 10,
            DeliveryScore = 15
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
