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
    /// Логин
    /// </summary>
    public string Login { get; set; }

    /// <summary>
    /// Пароль
    /// </summary>
    public string Password { get; set; }

    /// <summary>
    /// Номер телефона
    /// </summary>
    public string? Phone { get; set; }

    /// <summary>
    /// Эл. почта
    /// </summary>
    public string? Mail { get; set; }

    /// <summary>
    /// Права пользователя
    /// </summary>
    public Right? Right { get; set; }
}