using LiveLocationMicroservice;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

IConfiguration config = new ConfigurationBuilder().SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                                                  .AddJsonFile("appsettings.json", true)
                                                  .Build();
var telegramToken = config["TelegramToken"] ?? throw new JsonException("TelegramToken");
var myBotClient = new MyBotClient(telegramToken);
#pragma warning disable CS0618
myBotClient.RunBot();
#pragma warning restore CS0618
Console.WriteLine("BotStarted");
Console.ReadKey();
