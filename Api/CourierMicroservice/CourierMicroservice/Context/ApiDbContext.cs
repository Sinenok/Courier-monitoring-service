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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Right>(u =>
        {
            u.HasData(new Right
                      {
                          Id = Guid.Parse("e10222c4-7723-498b-8bf4-83252378e0c9"),
                          Name = "User",
                          Code = 0
                      },
                      new Right
                      {
                          Id = Guid.Parse("3dfcd6f3-1775-4e1b-91db-fdccea3f83eb"),
                          Name = "Admin",
                          Code = 1
                      });
        });
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
