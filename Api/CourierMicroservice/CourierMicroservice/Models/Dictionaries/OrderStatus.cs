﻿using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models.Dictionaries;

/// <summary>
/// Представляет сущность статуса заказа.
/// </summary>
public class OrderStatus : Entity<SequentialGuid>
{
    /// <summary>
    /// Возвращает статус заказа: Назначен курьер.
    /// </summary>
    public static readonly OrderStatus CourierAssigned = new(Guid.Parse("4fdc6d99-f3fd-49ee-8af9-6ac5531cc40e"), "CourierAssigned", 1);

    /// <summary>
    /// Возвращает статус заказа: Создан.
    /// </summary>
    public static readonly OrderStatus Created = new(Guid.Parse("b63c138c-c36b-4bb1-8dad-b3770512b858"), "Created", 0);

    /// <summary>
    /// Возвращает статус заказа: Выполнен.
    /// </summary>
    public static readonly OrderStatus Done = new(Guid.Parse("9171b0ee-7091-4dee-95aa-59c5522a21fd"), "Done", 3);

    /// <summary>
    /// Возвращает статус заказа: Выполняется.
    /// </summary>
    public static readonly OrderStatus InProgress = new(Guid.Parse("32ba2971-2a5e-435b-87c7-f8022e901c63"), "InProgress", 2);

    private static readonly Dictionary<int, OrderStatus> OrderStatuses = new()
    {
        [CourierAssigned.Code] = CourierAssigned,
        [Created.Code] = Created,
        [Done.Code] = Done,
        [InProgress.Code] = InProgress
    };

    public OrderStatus(SequentialGuid id, string name, int code)
        : base(id)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Code = code;
    }

    /// <summary>
    /// Возвращает код статуса.
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// Возвращает название статуса.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Возвращает статус заказа, связанный с данным кодом.
    /// </summary>
    /// <param name="code">Код статуса заказа.</param>
    /// <exception cref="ArgumentException">
    /// Возникает, если <see cref="code" /> равен <c>null</c>.
    /// </exception>
    /// <exception cref="InvalidOperationException">
    /// Возникает, если не удалось найти <see cref="OrderStatus" /> по указанному <paramref name="code" />.
    /// </exception>
    public static OrderStatus FromValue(int code)
    {
        if (OrderStatuses.TryGetValue(code, out var creationReason))
        {
            return creationReason;
        }

        throw new InvalidOperationException($"Не удалось найти статус заказа с указанным кодом {code}");
    }

    /// <summary>
    /// Возвращает все значения перечисления.
    /// </summary>
    public static IReadOnlyCollection<OrderStatus> GetAllValues() => OrderStatuses.Values;
}
