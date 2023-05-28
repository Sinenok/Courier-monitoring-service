using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace LiveLocationMicroservice.IoC;

public class MyConfiguration : IMyConfiguration
{
    private readonly IConfiguration _configuration = new ConfigurationBuilder().SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                                                                               .AddJsonFile("appsettings.json", true)
                                                                               .Build();

    public string GetConnectionString() => _configuration["DefaultConnection"] ?? throw new JsonException("TelegramToken");

    public string GetTgToken() => _configuration["TelegramToken"] ?? throw new JsonException("DefaultConnection");
}
