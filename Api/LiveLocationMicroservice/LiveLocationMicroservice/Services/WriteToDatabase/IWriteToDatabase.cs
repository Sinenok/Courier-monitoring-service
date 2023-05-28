namespace LiveLocationMicroservice.Services.WriteToDatabase;

public interface IWriteToDatabase
{
    public Task SetCoordinates(string userName, string? E, string? S);
}
