﻿using System.Security.Claims;
using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;
using CourierMicroservice.Exceptions;
using CourierMicroservice.Extensions;
using CourierMicroservice.Models;
using CourierMicroservice.Models.Core.Primitives;
using CourierMicroservice.Models.Dictionaries;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services.OrderService;

public class OrderService : IOrderService
{
    private readonly IAppDbContext _appDbContext;
    private readonly IHttpContextAccessor _contextAccessor;

    public OrderService(IHttpContextAccessor contextAccessor, IAppDbContext appDbContext)
    {
        _contextAccessor = contextAccessor;
        _appDbContext = appDbContext;
    }

    /// <inheritdoc />
    public async Task<Guid> CreateOrder(OrderDto orderDto, CancellationToken cancellationToken)
    {
        var user = await GetCurrentUser(cancellationToken);

        var paymentMethod = PaymentMethod.FromValue(orderDto.PaymentMethod);
        var packageInformation = new PackageInformation(SequentialGuid.Create(), orderDto.ProductDescription, orderDto.ProductWeight, orderDto.ProductCost);

        var order = new Order(SequentialGuid.Create(),
                              user,
                              orderDto.SenderName,
                              orderDto.SenderAddress,
                              orderDto.ReceiverName,
                              orderDto.ReceiverAddress,
                              orderDto.DeliveryCost,
                              paymentMethod,
                              packageInformation,
                              OrderStatus.Created);

        _appDbContext.Orders.Add(order);
        await _appDbContext.SaveChangesAsync(cancellationToken);
        return order.TrackNumber;
    }

    /// <inheritdoc />
    public async Task<OrderDto> GetOrder(Guid trackNumber, CancellationToken cancellationToken)
    {
        var result = await _appDbContext.Orders.Where(order => order.TrackNumber == trackNumber)
                                        .Include(o => o.PaymentMethod)
                                        .Include(o => o.PackageInformation)
                                        .Include(o => o.OrderStatus)
                                        .FirstOrDefaultAsync(cancellationToken) ??
                     throw new NotFoundException(typeof(Order), trackNumber);

        return new OrderDto(result.Id,
                            result.SenderName,
                            result.SenderAddress,
                            result.ReceiverName,
                            result.ReceiverAddress,
                            result.DeliveryCost,
                            result.PaymentMethod.Code,
                            result.PackageInformation.Cost,
                            result.PackageInformation.ShortDescription,
                            result.PackageInformation.Weight,
                            result.OrderStatus.Code,
                            result.TrackNumber);
    }

    public IEnumerable<PaymentMethod> GetPaymentMethods() => PaymentMethod.GetAllValues();

    /// <summary>
    /// Получение заказов сотрудника.
    /// </summary>
    /// <param name="statusId">Статус заказа.</param>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    public async Task<DataResult<OrderDto>> GetUserOrders(int? statusId, int? skip, int? take, CancellationToken cancellationToken)
    {
        OrderStatus? status = null;

        if (statusId.HasValue)
        {
            status = OrderStatus.FromValue(statusId.Value);
        }

        var user = await GetCurrentUser(cancellationToken);

        var query = _appDbContext.Orders.Where(order => order.Sender == user);

        if (status != null)
        {
            query = _appDbContext.Orders.Where(order => order.OrderStatus == status);
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var orders = await query.Include(o => o.PaymentMethod)
                                .Include(o => o.PackageInformation)
                                .OrderBy(o => o.CreatedDate)
                                .ApplyPagination(skip, take)
                                .ToListAsync(cancellationToken);

        var result = orders.Select(order => new OrderDto(order.Id,
                                                         order.SenderName,
                                                         order.SenderAddress,
                                                         order.ReceiverName,
                                                         order.ReceiverAddress,
                                                         order.DeliveryCost,
                                                         order.PaymentMethod.Code,
                                                         order.PackageInformation.Cost,
                                                         order.PackageInformation.ShortDescription,
                                                         order.PackageInformation.Weight,
                                                         order.OrderStatus.Code,
                                                         order.TrackNumber))
                           .ToList();

        return new DataResult<OrderDto>(result, totalCount);
    }

    /// <inheritdoc />
    public async Task<DataResult<OrderDto>> GetUserSentOrders(int? skip, int? take, CancellationToken cancellationToken)
    {
        var user = await GetCurrentUser(cancellationToken);

        var query = _appDbContext.Orders.Where(order => order.Sender == user)
                                 .ApplyPagination(skip, take);

        var orders = await query.Include(o => o.PaymentMethod)
                                .Include(o => o.PackageInformation)
                                .Include(o => o.OrderStatus)
                                .ToListAsync(cancellationToken);

        var result = orders.Select(order => new OrderDto(order.Id,
                                                         order.SenderName,
                                                         order.SenderAddress,
                                                         order.ReceiverName,
                                                         order.ReceiverAddress,
                                                         order.DeliveryCost,
                                                         order.PaymentMethod.Code,
                                                         order.PackageInformation.Cost,
                                                         order.PackageInformation.ShortDescription,
                                                         order.PackageInformation.Weight,
                                                         order.OrderStatus.Code,
                                                         order.TrackNumber))
                           .ToList();

        var totalCount = await query.CountAsync(cancellationToken);

        return new DataResult<OrderDto>(result, totalCount);
    }

    private async Task<User> GetCurrentUser(CancellationToken cancellationToken)
    {
        if (_contextAccessor.HttpContext == null)
        {
            throw new ApplicationException();
        }

        var name = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name) ?? throw new NotFoundException(typeof(PaymentMethod), "User not founded in claim.");
        var user = await _appDbContext.Users.FirstOrDefaultAsync(user => user.Login == name, cancellationToken) ?? throw new NotFoundException(typeof(PaymentMethod), name);

        return user;
    }
}
