using CourierMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourierMicroservice.Configurations;

/// <summary>
/// Представляет настройку конфигурации для типа <see cref="User" />.
/// </summary>
internal class UserConfiguration : EntityTypeConfigurationBase<User>
{
    /// <summary>
    /// Вызывается при выполнении конфигурации сущности типа <see cref="User" />.
    /// </summary>
    /// <param name="builder">Строитель, используемый при конфигурации сущности.</param>
    protected override void OnConfigure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users", t => t.HasComment("Пользователи"));
    }
}
