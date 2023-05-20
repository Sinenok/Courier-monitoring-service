using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="Right" />.
/// </summary>
internal class RightConfiguration : EntityTypeConfigurationBase<Right>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="Right" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<Right> builder)
    {
        builder.ToTable("rights", t => t.HasComment("Права"));

        builder.Property(p => p.Code)
               .HasComment("Код");

        builder.Property(p => p.Name)
               .HasComment("Название");

        builder.HasData(new Right(Guid.Parse("e10222c4-7723-498b-8bf4-83252378e0c9"), "User", 0),
                        new Right(Guid.Parse("3dfcd6f3-1775-4e1b-91db-fdccea3f83eb"), "Admin", 1),
                        new Right(Guid.Parse("60eb98f3-9f8c-4c12-93d4-66f208caa6f6"), "Courier", 2));
    }
}
