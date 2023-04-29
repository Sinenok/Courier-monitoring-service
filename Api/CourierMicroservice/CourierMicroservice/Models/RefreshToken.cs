namespace CourierMicroservice.Models;

/// <summary>
/// Представляет сущность рефреш-токена.
/// </summary>
public class RefreshToken
{
    /// <summary>
    /// Возвращает дату создания токена.
    /// </summary>
    public DateTime Created { get; set; } = DateTime.Now;

    /// <summary>
    /// Возвращает дату истечения токена.
    /// </summary>
    public DateTime Expires { get; set; }

    /// <summary>
    /// Возвращает токен.
    /// </summary>
    public string Token { get; set; } = string.Empty;
}
