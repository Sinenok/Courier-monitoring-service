using System.Security.Claims;
using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;
using CourierMicroservice.Exceptions;
using CourierMicroservice.Extensions;
using CourierMicroservice.Models;
using CourierMicroservice.Models.Dictionaries;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services.CourierService;

public class CourierService : ICourierService
{
    private readonly IAppDbContext _appDbContext;
    private readonly IHttpContextAccessor _contextAccessor;

    public CourierService(IHttpContextAccessor contextAccessor, IAppDbContext appDbContext)
    {
        _contextAccessor = contextAccessor;
        _appDbContext = appDbContext;
    }

    /// <inheritdoc />
    public async Task<Guid> CompleteOrder(Guid orderId, CancellationToken cancellationToken)
    {
        var user = await GetCurrentUser(cancellationToken);
        var courier = await _appDbContext.Couriers.FirstOrDefaultAsync(c => c.User == user, cancellationToken) ?? throw new NotFoundException(typeof(Courier), user.Id);
        var order = await _appDbContext.Orders.FirstOrDefaultAsync(order => (Guid)order.Id == orderId, cancellationToken) ?? throw new NotFoundException(typeof(Order), orderId);
        order.OrderStatus = OrderStatus.Done;
        order.Courier = courier;

        await _appDbContext.SaveChangesAsync(cancellationToken);

        return order.Id;
    }

    /// <inheritdoc />
    public async Task<DataResult<CourierOrderDto>> GetCreatedOrders(int? skip, int? take, CancellationToken cancellationToken) //!!
    {
        var query = _appDbContext.Orders.Where(order => order.OrderStatus == OrderStatus.Created)
                                 .ApplyPagination(skip, take);

        var orders = await query.Include(o => o.PaymentMethod)
                                .Include(o => o.PackageInformation)
                                .ToListAsync(cancellationToken);

        var result = orders.Select(order => new CourierOrderDto(order.Id,
                                                                order.SenderName,
                                                                order.SenderAddress,
                                                                order.ReceiverName,
                                                                order.ReceiverAddress,
                                                                order.DeliveryCost,
                                                                order.PaymentMethod.Code,
                                                                order.PackageInformation.Weight))
                           .ToList();

        var totalCount = await query.CountAsync(cancellationToken);

        return new DataResult<CourierOrderDto>(result, totalCount);
    }

    /// <inheritdoc />
    public async Task<Guid> TakeOrder(Guid orderId, CancellationToken cancellationToken)
    {
        var user = await GetCurrentUser(cancellationToken);
        var courier = await _appDbContext.Couriers.FirstOrDefaultAsync(c => c.User == user, cancellationToken) ?? throw new NotFoundException(typeof(Courier), user.Id);
        var order = await _appDbContext.Orders.FirstOrDefaultAsync(order => (Guid)order.Id == orderId, cancellationToken) ?? throw new NotFoundException(typeof(Order), orderId);
        order.OrderStatus = OrderStatus.CourierAssigned;
        order.Courier = courier;

        await _appDbContext.SaveChangesAsync(cancellationToken);

        return order.Id;
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
