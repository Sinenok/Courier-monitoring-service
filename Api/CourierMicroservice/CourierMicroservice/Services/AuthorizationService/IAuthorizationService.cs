using CourierMicroservice.Dtos;

namespace CourierMicroservice.Services.AuthorizationService;

/// <summary>
/// Представляет сервис авторизации.
/// </summary>
public interface IAuthorizationService
{
    /// <summary>
    /// Получение имени текущего пользователя.
    /// </summary>
    /// <returns></returns>
    public UserInfoDto GetUserInfo();

    /// <summary>
    /// Авторизация пользователя.
    /// </summary>
    /// <param name="request"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public Task<string> Login(UserLoginDto request, CancellationToken cancellationToken);

    /// <summary>
    /// Получение рефреш токена.
    /// </summary>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public Task<string> RefreshToken(CancellationToken cancellationToken);

    /// <summary>
    /// Регистрация пользователя.
    /// </summary>
    /// <param name="request"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public Task Register(UserRegistrationDto request, CancellationToken cancellationToken);
}
