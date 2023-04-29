using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace CourierMicroservice.Models.Core;

/// <summary>
/// Представляет Entity в терминологии Ddd.
/// </summary>
/// <typeparam name="TId">Тип идентификатора.</typeparam>
// TODO избавиться от реализации ITrackedEntity в базовом классе
public abstract class Entity<TId> : ITrackedEntity
{
    /// <summary>
    /// Инициализирует новый экземпляр типа <see cref="Entity{TId}" />.
    /// </summary>
    /// <param name="id">Идентификатор.</param>
    /// <exception cref="System.ArgumentNullException">
    /// Возникает, если <paramref name="id" /> равен <c>null</c>.
    /// </exception>
    protected Entity([DisallowNull] TId id) => Id = id ?? throw new ArgumentNullException(nameof(id));

    /// <summary>
    /// Возвращает идентификатор.
    /// </summary>
    [Key]
    public TId Id { get; }

    /// <summary>
    /// Возвращает дату и время создания сущности.
    /// </summary>
    public DateTimeOffset CreatedDate { get; private set; }

    /// <summary>
    /// Устанавливает дату и время создания сущности.
    /// </summary>
    public void SetCreatedDate() => CreatedDate = DateTimeOffset.UtcNow;

    /// <summary>
    /// Устанавливает дату и время обновления сущности.
    /// </summary>
    public void SetUpdatedDate() => UpdatedDate = DateTimeOffset.UtcNow;

    /// <summary>
    /// Возвращает дату и время обновления сущности.
    /// </summary>
    public DateTimeOffset UpdatedDate { get; private set; }

    /// <summary>
    /// Determines whether the specified object is equal to the current object.
    /// </summary>
    /// <param name="obj">The object to compare with the current object.</param>
    /// <returns>
    /// <see langword="true" /> if the specified object  is equal to the current object; otherwise, <see langword="false" />.
    /// </returns>
    public override bool Equals(object? obj)
    {
        if (obj is not Entity<TId> other)
        {
            return false;
        }

        if (ReferenceEquals(this, other))
        {
            return true;
        }

        if (GetRealType() != other.GetRealType())
        {
            return false;
        }

        if (IsTransient() || other.IsTransient())
        {
            return false;
        }

        return Id!.Equals(other.Id);
    }

    /// <summary>
    /// Returns a hash code for this instance.
    /// </summary>
    /// <returns>
    /// A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.
    /// </returns>
    public override int GetHashCode() => HashCode.Combine(Id);

    private Type? GetRealType()
    {
        var type = GetType();

        if (type.ToString()
                .Contains("Castle.Proxies."))
        {
            return type.BaseType;
        }

        return type;
    }

    private bool IsTransient() => Id is null || Id.Equals(default(TId));

    /// <summary>
    /// Реализует оператор ==.
    /// </summary>
    /// <param name="a">Параметр a.</param>
    /// <param name="b">Параметр b.</param>
    /// <returns>
    /// Результат операции.
    /// </returns>
    public static bool operator ==(Entity<TId>? a, Entity<TId>? b)
    {
        if (a is null && b is null)
        {
            return true;
        }

        if (a is null || b is null)
        {
            return false;
        }

        return a.Equals(b);
    }

    /// <summary>
    /// Реализует оператор !=.
    /// </summary>
    /// <param name="a">Параметр a.</param>
    /// <param name="b">Параметр b.</param>
    /// <returns>
    /// Результат операции.
    /// </returns>
    public static bool operator !=(Entity<TId>? a, Entity<TId>? b) => !(a == b);
}
