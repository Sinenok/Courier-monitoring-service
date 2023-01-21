using CourierMicroservice.Dtos;

namespace CourierMicroservice.Services;

public interface IAuthorizationService
{
    Task<List<UserRegistrationDto>> GetUsers(CancellationToken cancellationToken);
}
