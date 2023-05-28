using Npgsql;

namespace LiveLocationMicroservice.IoC;

public class WriteToDatabase : IWriteToDatabase
{
    private readonly IMyConfiguration _configuration;

    public WriteToDatabase(IMyConfiguration configuration) => _configuration = configuration;

    public async Task SetCoordinates(string userName, string? e, string? s)
    {
        if (string.IsNullOrWhiteSpace(e) || string.IsNullOrWhiteSpace(s))
        {
            return;
        }

        userName = "@" + userName;
        var conn = new NpgsqlConnection(_configuration.GetConnectionString());
        await conn.OpenAsync();
        var cmd = new NpgsqlCommand(@"SELECT ""Id"" FROM couriers WHERE ""TelegramUserName""=@telegramUserName", conn);
        cmd.Parameters.AddWithValue("telegramUserName", userName);
        var id = (Guid?)await cmd.ExecuteScalarAsync();

        if (id == null)
        {
            return;
        }

        cmd = new NpgsqlCommand(@"UPDATE couriers SET ""E""=@e, ""S""=@s WHERE ""Id""=@id", conn);
        cmd.Parameters.AddWithValue("e", e);
        cmd.Parameters.AddWithValue("s", s);
        cmd.Parameters.AddWithValue("id", id);
        await cmd.ExecuteNonQueryAsync();
        await conn.CloseAsync();
    }
}
