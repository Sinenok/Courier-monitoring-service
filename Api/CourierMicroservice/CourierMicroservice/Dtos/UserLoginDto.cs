namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет пользователя.
/// </summary>
/// <param name="Login">Логин.</param>
/// <param name="Password">Пароль.</param>
public record UserLoginDto(string Login, string Password);
