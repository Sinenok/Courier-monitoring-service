using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="Courier" />.
/// </summary>
internal class CourierConfiguration : EntityTypeConfigurationBase<Courier>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="Courier" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<Courier> builder)
    {
        builder.ToTable("couriers", t => t.HasComment("Курьеры"));

        builder.HasOne(p => p.User)
               .WithMany()
               .HasForeignKey("user_id");

        builder.Property("user_id")
               .HasComment("Идентификатор пользователя");
    }
}
