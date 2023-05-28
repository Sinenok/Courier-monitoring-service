using System.Globalization;
using LiveLocationMicroservice.Services.MyConfiguration;
using LiveLocationMicroservice.Services.WriteToDatabase;
using Telegram.Bot;

namespace LiveLocationMicroservice.Services.MyBotClient;

internal class MyBotClient : IMyBotClient
{
    private readonly TelegramBotClient _botClient;
    private readonly IWriteToDatabase _writeToDatabase;

    public MyBotClient(IMyConfigurationService configurationService, IWriteToDatabase writeToDatabase)
    {
        _botClient = new TelegramBotClient(configurationService.GetTgToken());
        _writeToDatabase = writeToDatabase;
    }

    [Obsolete("Obsolete")]
    public void RunBot()
    {
        OnMessageSubscribe();
        OnUpdateSubscribe();
        _botClient.StartReceiving();
    }

    [Obsolete("Obsolete")]
    private void OnMessageSubscribe()
    {
        _botClient.OnMessage += async (s, e) =>
        {
            try
            {
                if (e.Message.Location != null)
                {
                    var message = e.Message;
                    var username = message.From.Username;

                    await _botClient.SendTextMessageAsync(e.Message.Chat, $"Привет, {username}!");
                    await _botClient.SendTextMessageAsync(e.Message.Chat, $"Lat: {e.Message.Location?.Latitude}, Long: {e.Message.Location?.Longitude}");

                    await _writeToDatabase.SetCoordinates(username,
                                                          e.Message.Location?.Latitude.ToString(CultureInfo.InvariantCulture),
                                                          e.Message.Location?.Longitude.ToString(CultureInfo.InvariantCulture));
                }
                else
                {
                    await _botClient.SendTextMessageAsync(e.Message.Chat, e.Message?.Text ?? "Unrecognized content");
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                throw;
            }
        };
    }

    [Obsolete("Obsolete")]
    private void OnUpdateSubscribe()
    {
        _botClient.OnUpdate += async (s, e) =>
        {
            try
            {
                if (e.Update.EditedMessage?.Location == null)
                {
                    return;
                }

                var message = e.Update.EditedMessage;
                var username = message.From.Username;

                await _botClient.SendTextMessageAsync(e.Update.EditedMessage.Chat, $"Привет, {username}!");

                await _botClient.SendTextMessageAsync(e.Update.EditedMessage.Chat,
                                                      $"Lat: {e.Update.EditedMessage?.Location?.Latitude}, Long: {e.Update.EditedMessage?.Location?.Longitude}");

                await _writeToDatabase.SetCoordinates(username,
                                                      e.Update.EditedMessage?.Location?.Latitude.ToString(CultureInfo.InvariantCulture),
                                                      e.Update.EditedMessage?.Location?.Longitude.ToString(CultureInfo.InvariantCulture));
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                throw;
            }
        };
    }
}
