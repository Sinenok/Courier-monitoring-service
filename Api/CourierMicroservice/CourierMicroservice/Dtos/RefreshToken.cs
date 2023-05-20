namespace CourierMicroservice.Models;

/// <summary>
/// Представляет рефреш-токен.
/// </summary>
internal class RefreshToken
{
    public RefreshToken(string token) => Token = token;

    /// <summary>
    /// Возвращает дату создания токена.
    /// </summary>
    public DateTime Created { get; init; }

    /// <summary>
    /// Возвращает дату истечения токена.
    /// </summary>
    public DateTime Expires { get; init; }

    /// <summary>
    /// Возвращает токен.
    /// </summary>
    public string Token { get; init; }
}
