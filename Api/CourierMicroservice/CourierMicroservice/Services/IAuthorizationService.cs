using CourierMicroservice.Dtos;

namespace CourierMicroservice.Services;

public interface IAuthorizationService
{
    Task<List<UserDto>> GetUsers(CancellationToken cancellationToken);
}