using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="Sender" />.
/// </summary>
internal class SenderConfiguration : EntityTypeConfigurationBase<Sender>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="Sender" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<Sender> builder)
    {
        builder.ToTable("senders", t => t.HasComment("Отправитель"));
    }
}
