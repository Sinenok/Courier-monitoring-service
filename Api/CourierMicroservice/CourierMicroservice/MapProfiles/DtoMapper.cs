using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Riok.Mapperly.Abstractions;

namespace CourierMicroservice.MapProfiles;

[Mapper(UseDeepCloning = true)]
public partial class DtoMapper
{
    public partial UserRegistrationDto UserToUserDto(User item);
}
