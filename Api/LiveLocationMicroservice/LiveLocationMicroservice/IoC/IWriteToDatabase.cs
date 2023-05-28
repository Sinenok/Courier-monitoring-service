namespace LiveLocationMicroservice.IoC;

public interface IWriteToDatabase
{
    public Task SetCoordinates(string userName, string? E, string? S);
}
