namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет сущность регистрации.
/// </summary>
/// <param name="FirstName"></param>
/// <param name="LastName"></param>
/// <param name="Login"></param>
/// <param name="Mail"></param>
/// <param name="Password"></param>
/// <param name="Phone"></param>
public record UserRegistrationDto(string FirstName, string LastName, string Login, string Mail, string Password, string Phone);
