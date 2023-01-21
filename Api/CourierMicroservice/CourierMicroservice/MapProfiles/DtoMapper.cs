using CourierMicroservice.Dtos;
using CourierMicroservice.Models;
using Riok.Mapperly.Abstractions;

namespace CourierMicroservice.MapProfiles;

[Mapper(UseDeepCloning = true)]
public partial class DtoMapper
{
    public partial RightDto RightToRightDto(Right item);

    public partial UserDto UserToUserDto(User item);
}
