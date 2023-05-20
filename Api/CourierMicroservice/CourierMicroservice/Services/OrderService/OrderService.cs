﻿using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Exceptions;
using CourierMicroservice.Models;
using CourierMicroservice.Models.Core.Primitives;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services.OrderService;

public class OrderService : IOrderService
{
    private readonly IAppDbContext _appDbContext;

    public OrderService(IAppDbContext appDbContext) => _appDbContext = appDbContext;

    public async Task<Guid> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken)
    {
        var paymentMethod = await _appDbContext.PaymentMethods.FirstOrDefaultAsync(q => q.Code == orderDto.PaymentMethod, cancellationToken) ??
                            throw new NotFoundException(typeof(PaymentMethod), orderDto.PaymentMethod);
        var packageInformation = new PackageInformation(SequentialGuid.Create(), orderDto.ProductDescription, orderDto.ProductWeight, orderDto.ProductCost);

        var order = new Order(SequentialGuid.Create(),
                              orderDto.SenderName,
                              orderDto.SenderAddress,
                              orderDto.ReceiverName,
                              orderDto.ReceiverAddress,
                              orderDto.DeliveryCost,
                              paymentMethod,
                              packageInformation);

        _appDbContext.Orders.Add(order);
        await _appDbContext.SaveChangesAsync(cancellationToken);
        return order.TrackNumber;
    }

    public async Task<OrderDto> GetOrder(Guid trackNumber, CancellationToken cancellationToken)
    {
        var result = await _appDbContext.Orders.Where(order => order.TrackNumber == trackNumber)
                                        .Include(o => o.PaymentMethod)
                                        .Include(o => o.PackageInformation)
                                        .FirstOrDefaultAsync(cancellationToken) ??
                     throw new NotFoundException(typeof(Order), trackNumber);

        return new OrderDto(result.SenderName,
                            result.SenderAddress,
                            result.ReceiverName,
                            result.ReceiverAddress,
                            result.DeliveryCost,
                            result.PaymentMethod.Code,
                            result.PackageInformation.Cost,
                            result.PackageInformation.ShortDescription,
                            result.PackageInformation.Weight);
    }

    public async Task<List<PaymentMethod>> GetPaymentMethods(CancellationToken cancellationToken)
    {
        var result = await _appDbContext.PaymentMethods.ToListAsync(cancellationToken);
        return result;
    }
}
