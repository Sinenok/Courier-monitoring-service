namespace LiveLocationMicroservice.Services.MyConfiguration;

public interface IMyConfigurationService
{
    public string GetConnectionString();

    public string GetTgToken();
}
