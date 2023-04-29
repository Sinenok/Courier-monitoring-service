using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Context;

/// <summary>
/// Описывает контекст взаимодействия с БД.
/// </summary>
public interface IAppDbContext
{
    /// <summary>
    /// Возвращает набор заказов.
    /// </summary>
    DbSet<Order> Orders { get; }

    /// <summary>
    /// Возвращает набор статуса заказа.
    /// </summary>
    DbSet<OrderStatus> OrderStatuses { get; }

    /// <summary>
    /// Возвращает набор информацией о посылке.
    /// </summary>
    DbSet<PackageInformation> PackageInformation { get; }

    /// <summary>
    /// Возвращает набор метода оплаты заказа.
    /// </summary>
    DbSet<PaymentMethod> PaymentMethods { get; }

    /// <summary>
    /// Возвращает набор прав пользователя.
    /// </summary>
    DbSet<Right> Rights { get; }

    /// <summary>
    /// Возвращает набор сущность пользователя.
    /// </summary>
    DbSet<User> Users { get; }

    /// <summary>
    /// Сохраняет изменения.
    /// </summary>
    /// <param name="cancellationToken">Маркер отмены.</param>
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
