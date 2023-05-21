using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Context;

/// <summary>
/// Описывает контекст взаимодействия с БД.
/// </summary>
public interface IAppDbContext
{
    /// <summary>
    /// Возвращает набор курьеров.
    /// </summary>
    DbSet<Courier> Couriers { get; }

    /// <summary>
    /// Возвращает набор заказов.
    /// </summary>
    DbSet<Order> Orders { get; }

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
