using CourierMicroservice.Models.Core;
using CourierMicroservice.Models.Core.Primitives;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность пользователя.
/// </summary>
public class User : Entity<SequentialGuid>
{
    public User(SequentialGuid id, string firstName, byte[] passwordHash, byte[] passwordSalt, Right right)
        : base(id)
    {
        FirstName = firstName;
        PasswordHash = passwordHash;
        PasswordSalt = passwordSalt;
        Right = right;
    }

    protected User()
        : base(SequentialGuid.Empty)
    {
        FirstName = null!;
        PasswordHash = null!;
        PasswordSalt = null!;
        Right = null!;
    }

    /// <summary>
    /// Возвращает имя.
    /// </summary>
    public string FirstName { get; set; }

    /// <summary>
    /// Возвращает фамилию.
    /// </summary>
    public string? LastName { get; set; }

    /// <summary>
    /// Возвращает логин пользователя.
    /// </summary>
    public string Login { get; set; } = string.Empty;

    /// <summary>
    /// Возвращает эл. почту.
    /// </summary>
    public string? Mail { get; set; }

    /// <summary>
    /// Возвращает хеш пароля.
    /// </summary>
    public byte[] PasswordHash { get; set; }

    /// <summary>
    /// Возвращает соль пароля.
    /// </summary>
    public byte[] PasswordSalt { get; set; }

    /// <summary>
    /// Возвращает номер телефона.
    /// </summary>
    public string? Phone { get; set; }

    /// <summary>
    /// Возвращает рефреш-токен.
    /// </summary>
    public string RefreshToken { get; set; } = string.Empty;

    /// <summary>
    /// Возвращает права пользователя.
    /// </summary>
    public Right Right { get; set; }

    /// <summary>
    /// Возвращает дату создания токена.
    /// </summary>
    public DateTime TokenCreated { get; set; }

    /// <summary>
    /// Возвращает дату истечения токена.
    /// </summary>
    public DateTime TokenExpires { get; set; }
}
