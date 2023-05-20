namespace CourierMicroservice.Extensions;

/// <summary>
/// Содержит набор методов расширения для работы с фильтрами запросов <see cref="IQueryable{T}" />
/// </summary>
public static class QueryFilterExtensions
{
    /// <summary>
    /// Применяет пагинацию.
    /// </summary>
    /// <param name="query">Запрос.</param>
    /// <param name="skip">Смещение для пагинации.</param>
    /// <param name="take">Количество запрашиваемых сущностей.</param>
    /// <typeparam name="T">Тип сущности.</typeparam>
    /// <exception cref="ArgumentNullException">
    /// Возникает, если <paramref name="query" /> или <paramref name="request" /> равен <c>null</c>.
    /// </exception>
    /// <remarks>
    /// Необходимо использовать последним в цепочке методов.
    /// </remarks>
    public static IQueryable<T> ApplyPagination<T>(this IQueryable<T> query, int? skip, int? take)
    {
        ArgumentNullException.ThrowIfNull(query);

        if (skip.HasValue)
        {
            query = query.Skip(skip.Value);
        }

        if (take.HasValue)
        {
            query = query.Take(take.Value);
        }

        return query;
    }
}
