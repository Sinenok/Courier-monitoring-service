using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="PackageInformation" />.
/// </summary>
internal class PackageInformationConfiguration : EntityTypeConfigurationBase<PackageInformation>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="PackageInformation" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<PackageInformation> builder)
    {
        builder.ToTable("packageInformation", t => t.HasComment("Информация о посылке"));
    }
}
