using CourierMicroservice.Context;
using CourierMicroservice.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IAuthorizationService, AuthorizationService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddDbContext<AppDbContext>(opt =>
        opt.UseNpgsql(builder.Configuration.GetConnectionString("courierDB")));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();