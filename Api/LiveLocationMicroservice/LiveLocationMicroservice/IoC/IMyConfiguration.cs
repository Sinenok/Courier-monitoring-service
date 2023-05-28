namespace LiveLocationMicroservice.IoC;

public interface IMyConfiguration
{
    public string GetConnectionString();

    public string GetTgToken();
}
