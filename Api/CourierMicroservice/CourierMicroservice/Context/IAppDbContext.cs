using CourierMicroservice.Models;
using CourierMicroservice.Models.Dictionaries;
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
    /// Возвращает набор метода оплаты заказа.
    /// </summary>
    DbSet<PaymentMethod> PaymentMethods { get; }

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
