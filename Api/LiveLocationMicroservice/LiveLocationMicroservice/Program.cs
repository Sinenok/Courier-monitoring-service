using LiveLocationMicroservice;
using LiveLocationMicroservice.IoC;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureServices((_, services) =>
        {
            services.AddSingleton<IMyConfiguration, MyConfiguration>();
            services.AddSingleton<IWriteToDatabase, WriteToDatabase>();
        });

using var host = CreateHostBuilder(args)
    .Build();
var myConfiguration = host.Services.GetRequiredService<IMyConfiguration>();
var writeToDatabase = host.Services.GetRequiredService<IWriteToDatabase>();

var myBotClient = new MyBotClient(myConfiguration, writeToDatabase);
#pragma warning disable CS0618
myBotClient.RunBot();
#pragma warning restore CS0618
Console.WriteLine("BotStarted");
Console.ReadKey();
