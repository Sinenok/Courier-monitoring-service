namespace CourierMicroservice.Dtos;

/// <summary>
/// Представляет информацию о регистрации.
/// </summary>
/// <param name="FirstName">Имя.</param>
/// <param name="LastName">Фамилия.</param>
/// <param name="Login">Логин.</param>
/// <param name="Mail">Эл. почта.</param>
/// <param name="Password">Пароль.</param>
/// <param name="Phone">Номер телефона.</param>
/// <param name="Role">Роль.</param>
public record UserRegistrationDto(string FirstName, string LastName, string Login, string Mail, string Password, string Phone, int Role);
