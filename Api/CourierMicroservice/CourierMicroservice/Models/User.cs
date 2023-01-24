namespace CourierMicroservice.Models;

/// <summary>
/// Сущность пользователя
/// </summary>
public class User : BaseAuditEntity
{
    /// <summary>
    /// Имя
    /// </summary>
    public string FirstName { get; set; }

    /// <summary>
    /// Фамилия
    /// </summary>
    public string? LastName { get; set; }

    /// <summary>
    /// Логин пользователя
    /// </summary>
    public string Login { get; set; } = string.Empty;

    /// <summary>
    /// Эл. почта
    /// </summary>
    public string? Mail { get; set; }

    /// <summary>
    /// Хеш пароля
    /// </summary>
    public byte[] PasswordHash { get; set; }

    /// <summary>
    /// Соль пароля
    /// </summary>
    public byte[] PasswordSalt { get; set; }

    /// <summary>
    /// Номер телефона
    /// </summary>
    public string? Phone { get; set; }

    /// <summary>
    /// Рефреш токен
    /// </summary>
    public string RefreshToken { get; set; } = string.Empty;

    /// <summary>
    /// Права пользователя
    /// </summary>
    public Right Right { get; set; }

    /// <summary>
    /// Дата создания токена
    /// </summary>
    public DateTime TokenCreated { get; set; }

    /// <summary>
    /// Дата истечения токена
    /// </summary>
    public DateTime TokenExpires { get; set; }
}
