using CourierMicroservice.Context;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Infrastructure.IoC;

/// <summary>
/// Содержит набор методов расширения для регистрации служб Entity Framework в контейнере внедрения зависимостей.
/// </summary>
internal static class EntityFrameworkExtensions
{
    public static IApplicationBuilder AddAutomaticMigrations(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                                    .CreateScope();
        using var context = serviceScope!.ServiceProvider.GetRequiredService<AppDbContext>();
        context.Database.Migrate();
        return app;
    }

    /// <summary>
    /// Добавляет службы Entity Framework в контейнер внедрения зависимостей.
    /// </summary>
    /// <param name="services">Коллекция дескрипторов службы.</param>
    /// <exception cref="System.ArgumentNullException">
    /// Возникает, если <paramref name="services" /> равен <c>null</c>.
    /// </exception>
    /// <returns>Коллекция дескрипторов службы.</returns>
    public static IServiceCollection AddDefaultEfCore(this IServiceCollection services)
    {
        if (services == null)
        {
            throw new ArgumentNullException(nameof(services));
        }

        services.AddDbContextFactory<AppDbContext>((provider, builder) =>
        {
            var configuration = provider.GetRequiredService<IConfiguration>();

            var connectionString = configuration.GetConnectionString(DbConstants.ConnectionStringSectionName) ??
                                   throw new InvalidOperationException("Строка подключения к БД не настроена.");
            builder.EnableSensitiveDataLogging();
            builder.UseLazyLoadingProxies();
            builder.UseNpgsql(connectionString, optionsBuilder => optionsBuilder.EnableRetryOnFailure());
        });
        services.AddScoped<IAppDbContext, AppDbContext>();
        return services;
    }
}
