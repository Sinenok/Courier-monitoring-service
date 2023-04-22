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
    public DbSet<PackageInformation> PackageInformation { get; set; }
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
        modelBuilder.Entity<PaymentMethod>(u =>
        {
            u.HasData(new PaymentMethod
                      {
                          Id = Guid.Parse("d353d9a8-b9e2-4b8e-9207-e898ef328b52"),
                          Name = "Cash",
                          Code = 0
                      },
                      new PaymentMethod
                      {
                          Id = Guid.Parse("7373f370-6206-41c7-b4e7-91caddf1a35a"),
                          Name = "Card",
                          Code = 1
                      },
                      new PaymentMethod
                      {
                          Id = Guid.Parse("424b93cd-ca77-4bb5-b20b-e0f1201bc350"),
                          Name = "Online",
                          Code = 2
                      });
        });

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
