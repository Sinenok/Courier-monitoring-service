namespace CourierMicroservice.Models;

/// <summary>
/// Сущность пользователя
/// </summary>
public class User : BaseAuditEntity
{
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime TokenCreated { get; set; }
    public DateTime TokenExpires { get; set; }
    public string Username { get; set; } = string.Empty;
}
