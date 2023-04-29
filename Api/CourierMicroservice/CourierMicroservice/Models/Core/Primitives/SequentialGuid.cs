using System.Diagnostics;
using System.Security.Cryptography;

namespace CourierMicroservice.Models.Core.Primitives;

/// <summary>
/// Представляет последовательно генерируемый идентификатор.
/// </summary>
[DebuggerDisplay("{" + nameof(_value) + "}")]
public readonly struct SequentialGuid : IEquatable<SequentialGuid>, IComparable<SequentialGuid>, IComparable
{
    /// <summary>
    /// Возвращает доступный только для чтения экземпляр структуры <see cref="SequentialGuid" />, значением которого являются
    /// все ноли.
    /// </summary>
    // ReSharper disable once MemberCanBePrivate.Global
    // ReSharper disable once NotAccessedField.Global
    public static readonly SequentialGuid Empty = new(Guid.Empty);

    private static long _timestamp;
    private static readonly object Lock = new();
    private readonly Guid _value;

    private SequentialGuid(Guid value) => _value = value;

    /// <summary>
    /// Создает последовательно генерируемый идентификатор.
    /// </summary>
    /// <returns>Последовательно генерируемый идентификатор.</returns>
    public static SequentialGuid Create()
    {
        var randomBytes = new byte[10];
        var randomNumberGenerator = RandomNumberGenerator.Create();
        randomNumberGenerator.GetBytes(randomBytes);
        var timestamp = GetTimestamp();
        var timestampBytes = BitConverter.GetBytes(timestamp);

        if (BitConverter.IsLittleEndian)
        {
            Array.Reverse(timestampBytes);
        }

        var guidBytes = new byte[16];
        Buffer.BlockCopy(timestampBytes, 2, guidBytes, 0, 6);
        Buffer.BlockCopy(randomBytes, 0, guidBytes, 6, 10);

        if (BitConverter.IsLittleEndian)
        {
            Array.Reverse(guidBytes, 0, 4);
            Array.Reverse(guidBytes, 4, 2);
        }

        return new SequentialGuid(new Guid(guidBytes));
    }

    /// <summary>
    /// Compares the current instance with another object of the same type and returns an integer that indicates
    /// whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.
    /// </summary>
    /// <param name="obj">An object to compare with this instance.</param>
    /// <exception cref="T:System.ArgumentException">
    /// <paramref name="obj" /> is not the same type as this instance.
    /// </exception>
    /// <returns>
    /// A value that indicates the relative order of the objects being compared. The return value has these meanings:
    /// <list type="table">
    ///     <listheader>
    ///         <term> Value</term><description> Meaning</description>
    ///     </listheader>
    ///     <item>
    ///         <term> Less than zero</term>
    ///         <description> This instance precedes <paramref name="obj" /> in the sort order.</description>
    ///     </item>
    ///     <item>
    ///         <term> Zero</term>
    ///         <description> This instance occurs in the same position in the sort order as <paramref name="obj" />.</description>
    ///     </item>
    ///     <item>
    ///         <term> Greater than zero</term>
    ///         <description> This instance follows <paramref name="obj" /> in the sort order.</description>
    ///     </item>
    /// </list>
    /// </returns>
    public int CompareTo(object? obj)
    {
        if (obj is null)
        {
            return 1;
        }

        return obj is SequentialGuid other ? CompareTo(other) : throw new ArgumentException($"Объект должен быть типом {nameof(SequentialGuid)}");
    }

    /// <summary>
    /// Compares the current instance with another object of the same type and returns an integer that indicates
    /// whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.
    /// </summary>
    /// <param name="other">An object to compare with this instance.</param>
    /// <returns>
    /// A value that indicates the relative order of the objects being compared. The return value has these meanings:
    /// <list type="table">
    ///     <listheader>
    ///         <term> Value</term><description> Meaning</description>
    ///     </listheader>
    ///     <item>
    ///         <term> Less than zero</term>
    ///         <description> This instance precedes <paramref name="other" /> in the sort order.</description>
    ///     </item>
    ///     <item>
    ///         <term> Zero</term>
    ///         <description> This instance occurs in the same position in the sort order as <paramref name="other" />.</description>
    ///     </item>
    ///     <item>
    ///         <term> Greater than zero</term>
    ///         <description> This instance follows <paramref name="other" /> in the sort order.</description>
    ///     </item>
    /// </list>
    /// </returns>
    public int CompareTo(SequentialGuid other) => string.Compare(_value.ToString(), other._value.ToString(), StringComparison.Ordinal);

    /// <summary>
    /// Определяет, равен ли указанный <paramref name="other" /> этому экземпляру.
    /// </summary>
    /// <param name="other">Объект для сравнения.</param>
    /// <returns><c>true</c> Если <paramref name="other" /> равен текущему экземпляру; в противном случае <c>false</c>.</returns>
    // ReSharper disable once MemberCanBePrivate.Global
    public bool Equals(SequentialGuid other) => _value.Equals(other._value);

    /// <inheritdoc />
    public override bool Equals(object? obj) => obj is SequentialGuid other && Equals(other);

    /// <inheritdoc />
    public override int GetHashCode() => _value.GetHashCode();

    /// <inheritdoc />
    public override string ToString() => _value.ToString();

    private static long GetTimestamp()
    {
        lock (Lock)
        {
            var timestamp = DateTime.UtcNow.Ticks / 10000L;

            while (_timestamp == timestamp)
            {
                timestamp = DateTime.UtcNow.Ticks / 10000L;
            }

            _timestamp = timestamp;
            return timestamp;
        }
    }

    /// <summary>
    /// Реализует оператор ==.
    /// </summary>
    /// <param name="left">Left.</param>
    /// <param name="right">Right.</param>
    /// <returns>
    /// Возвращает результат операции.
    /// </returns>
    public static bool operator ==(SequentialGuid left, SequentialGuid right) => left.Equals(right);

    /// <summary>
    /// Выполняет неявное преобразование из <see cref="SequentialGuid" /> в <see cref="Guid" />.
    /// </summary>
    /// <param name="guid">Уникальный идентификатор.</param>
    /// <returns>
    /// Результат операции.
    /// </returns>
    public static implicit operator Guid(SequentialGuid guid) => guid._value;

    /// <summary>
    /// Выполняет неявное преобразование из <see cref="Guid" /> в <see cref="SequentialGuid" />.
    /// </summary>
    /// <param name="guid">Уникальный идентификатор.</param>
    /// <returns>
    /// Результат операции.
    /// </returns>
    public static implicit operator SequentialGuid(Guid guid) => new(guid);

    /// <summary>
    /// Реализует оператор !=.
    /// </summary>
    /// <param name="left">Левый операнд.</param>
    /// <param name="right">Правый операнд.</param>
    /// <returns>
    /// Возвращает результат операции.
    /// </returns>
    public static bool operator !=(SequentialGuid left, SequentialGuid right) => !left.Equals(right);
}
