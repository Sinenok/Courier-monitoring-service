using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="Receiver" />.
/// </summary>
internal class ReceiverConfiguration : EntityTypeConfigurationBase<Receiver>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="Receiver" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<Receiver> builder)
    {
        builder.ToTable("receivers", t => t.HasComment("Получатель"));
    }
}
