using Telegram.Bot;

namespace LiveLocationMicroservice;

internal class MyBotClient
{
    public MyBotClient(string token) => BotClient = new TelegramBotClient(token);

    private TelegramBotClient BotClient { get; }

    [Obsolete("Obsolete")]
    public void RunBot()
    {
        OnMessageSubscribe();
        OnUpdateSubscribe();
        BotClient.StartReceiving();
    }

    [Obsolete("Obsolete")]
    private void OnMessageSubscribe()
    {
        BotClient.OnMessage += async (s, e) =>
        {
            try
            {
                if (e.Message.Location != null)
                {
                    await BotClient.SendTextMessageAsync(e.Message.Chat, $"Lat: {e.Message.Location?.Latitude}, Long: {e.Message.Location?.Longitude}");
                }
                else
                {
                    await BotClient.SendTextMessageAsync(e.Message.Chat, e.Message?.Text ?? "Unrecognized content");
                }
            }
            catch
            {
            }
        };
    }

    [Obsolete("Obsolete")]
    private void OnUpdateSubscribe()
    {
        BotClient.OnUpdate += async (s, e) =>
        {
            try
            {
                if (e.Update.EditedMessage?.Location != null)
                {
                    await BotClient.SendTextMessageAsync(e.Update.EditedMessage.Chat,
                                                         $"Lat: {e.Update.EditedMessage?.Location?.Latitude}, Long: {e.Update.EditedMessage?.Location?.Longitude}");
                }
            }
            catch
            {
            }
        };
    }
}
