using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="Order" />.
/// </summary>
internal class OrderConfiguration : EntityTypeConfigurationBase<Order>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="Order" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<Order> builder)
    {
        builder.ToTable("orders", t => t.HasComment("Заказ"));
    }
}
