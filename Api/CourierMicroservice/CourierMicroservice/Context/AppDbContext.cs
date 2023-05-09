using CourierMicroservice.Models;
using CourierMicroservice.Models.Core;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Context;

/// <summary>
/// Представляет контекст для работы с БД.
/// </summary>
/// <seealso cref="DbContext" />
public sealed class AppDbContext : DbContext, IAppDbContext
{
    /// <summary>
    /// Инициализирует новый экземпляр типа <see cref="AppDbContext" />.
    /// </summary>
    /// <param name="options">Опции.</param>
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    /// <inheritdoc />
    public DbSet<Order> Orders => Set<Order>();

    /// <inheritdoc />
    public DbSet<OrderStatus> OrderStatuses => Set<OrderStatus>();

    /// <inheritdoc />
    public DbSet<PackageInformation> PackageInformation => Set<PackageInformation>();

    /// <inheritdoc />
    public DbSet<PaymentMethod> PaymentMethods => Set<PaymentMethod>();

    /// <inheritdoc />
    public DbSet<Right> Rights => Set<Right>();

    /// <inheritdoc cref="DbContext" />
    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new())
    {
        foreach (var entry in ChangeTracker.Entries()
                                           .Where(x => x.Entity is ITrackedEntity))
        {
            if (entry.State == EntityState.Added)
            {
                ((ITrackedEntity)entry.Entity).SetCreatedDate();
                ((ITrackedEntity)entry.Entity).SetUpdatedDate();
            }
            else if (entry.State == EntityState.Modified)
            {
                ((ITrackedEntity)entry.Entity).SetUpdatedDate();
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }

    /// <inheritdoc />
    public DbSet<User> Users { get; set; }

    /// <inheritdoc />
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder.UseLazyLoadingProxies();
    }

    /// <inheritdoc />
    protected override void OnModelCreating(ModelBuilder modelBuilder) => modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
}
