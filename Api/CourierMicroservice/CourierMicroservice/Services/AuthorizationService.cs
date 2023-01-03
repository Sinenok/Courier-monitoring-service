using CourierMicroservice.Context;
using CourierMicroservice.Dtos;
using CourierMicroservice.MapProfiles;
using Microsoft.EntityFrameworkCore;

namespace CourierMicroservice.Services
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly AppDbContext _dbContext;
        private readonly DtoMapper _mapper;

        public AuthorizationService(AppDbContext productContext)
        {
            _dbContext = productContext;
            _mapper = new DtoMapper();
        }

        public async Task<List<UserDto>> GetUsers(CancellationToken cancellationToken)
        {
            var users = await _dbContext.Users
                        .Select(x => _mapper.UserToUserDto(x))
                        .ToListAsync(cancellationToken);
            return users;
        }
    }
}