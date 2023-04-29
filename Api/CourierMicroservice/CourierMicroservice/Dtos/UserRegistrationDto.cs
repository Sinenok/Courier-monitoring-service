namespace CourierMicroservice.Dtos;

public record UserRegistrationDto(string FirstName, string LastName, string Login, string Mail, string Password, string Phone);
