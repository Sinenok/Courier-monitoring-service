using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderStatus> OrderStatuses { get; set; }
    public DbSet<PackageInformation> PackageInformations { get; set; }
    public DbSet<PaymentMethod> PaymentMethods { get; set; }
    public DbSet<Right> Rights { get; set; }
    public DbSet<User> Users { get; set; }

    public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new())
    {
        OnBeforeSaving();
        return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
    }

    private void OnBeforeSaving()
    {
        foreach (var auditEntity in ChangeTracker.Entries<BaseAuditEntity>())
        {
            switch (auditEntity.State)
            {
                case EntityState.Added:
                    auditEntity.Property(x => x.Modified)
                               .IsModified = false;
                    auditEntity.Entity.Created = DateTime.UtcNow;
                    break;
                case EntityState.Modified:
                    auditEntity.Property(x => x.Created)
                               .IsModified = false;
                    auditEntity.Entity.Modified = DateTime.UtcNow;
                    break;
                case EntityState.Detached:
                    break;
                case EntityState.Unchanged:
                    break;
                case EntityState.Deleted:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}
