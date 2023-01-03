using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace CourierMicroservice.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.EnableSensitiveDataLogging();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) 
    {
        modelBuilder.Entity<User>(u =>
        {
            u.HasData(new User {
                Id = Guid.NewGuid(),
                FirstName = "FirstName1",
                LastName = "LastName1",
                Login = "Login1",
                Mail = "Mail1",
                Phone = "Phone1",
                Password = "password1",
            });
        });
    }

    public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken())
    {
        OnBeforeSaving();
        return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

    protected void OnBeforeSaving()
    {
        foreach (var auditEntity in ChangeTracker.Entries<BaseAuditEntity>())
        {
            switch (auditEntity.State)
            {
                case EntityState.Added:
                    auditEntity.Property(x => x.Modified).IsModified = false;
                    auditEntity.Entity.Created = DateTime.UtcNow;
                    break;
                case EntityState.Modified:
                    auditEntity.Property(x => x.Created).IsModified = false;
                    auditEntity.Entity.Modified = DateTime.UtcNow;
                    break;
            }
        }
    }

    public DbSet<Right> Rights { get; set; }
    public DbSet<User> Users { get; set; }
}