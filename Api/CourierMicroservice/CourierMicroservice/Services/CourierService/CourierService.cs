using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.Dtos.Common;
using CourierMicroservice.Extensions;
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
}
