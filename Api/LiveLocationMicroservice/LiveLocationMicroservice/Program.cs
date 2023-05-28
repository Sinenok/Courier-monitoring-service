using LiveLocationMicroservice.Services.MyBotClient;
using LiveLocationMicroservice.Services.MyConfiguration;
using LiveLocationMicroservice.Services.WriteToDatabase;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureServices((_, services) =>
        {
            services.AddSingleton<IMyConfigurationService, MyConfigurationService>();
            services.AddSingleton<IWriteToDatabase, WriteToDatabase>();
            services.AddSingleton<IMyBotClient, MyBotClient>();
        });

using var host = CreateHostBuilder(args)
    .Build();
var myBotClient = host.Services.GetRequiredService<IMyBotClient>();
#pragma warning disable CS0618
myBotClient.RunBot();
#pragma warning restore CS0618
Console.WriteLine("BotStarted");
Console.ReadKey();
