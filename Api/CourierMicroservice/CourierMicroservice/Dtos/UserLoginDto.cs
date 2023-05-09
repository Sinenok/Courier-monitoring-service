namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет сущность пользователя.
/// </summary>
/// <param name="Login"></param>
/// <param name="Password"></param>
public record UserLoginDto(string Login, string Password);
