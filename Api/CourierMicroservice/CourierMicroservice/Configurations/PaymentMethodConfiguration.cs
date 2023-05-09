using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="PaymentMethod" />.
/// </summary>
internal class PaymentMethodConfiguration : EntityTypeConfigurationBase<PaymentMethod>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="PaymentMethod" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<PaymentMethod> builder)
    {
        builder.ToTable("paymentMethods", t => t.HasComment("Метод оплаты заказа"));

        builder.Property(p => p.Code)
               .HasComment("Код");

        builder.Property(p => p.Name)
               .HasComment("Название");

        builder.HasData(new PaymentMethod(Guid.Parse("d353d9a8-b9e2-4b8e-9207-e898ef328b52"), "Cash", 0),
                        new PaymentMethod(Guid.Parse("7373f370-6206-41c7-b4e7-91caddf1a35a"), "Card", 1),
                        new PaymentMethod(Guid.Parse("424b93cd-ca77-4bb5-b20b-e0f1201bc350"), "Online", 2));
    }
}
