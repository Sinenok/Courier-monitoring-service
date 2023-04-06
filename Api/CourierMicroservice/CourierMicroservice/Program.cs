using System.Text;
using CourierMicroservice.Context;
using CourierMicroservice.Services.AuthorizationService;
using CourierMicroservice.Services.OrderService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IAuthorizationService, AuthorizationService>();
builder.Services.AddScoped<IOrderService, OrderService>();

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2",
                                  new OpenApiSecurityScheme
                                  {
                                      Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
                                      In = ParameterLocation.Header,
                                      Name = "Authorization",
                                      Type = SecuritySchemeType.ApiKey
                                  });
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
       .AddJwtBearer(options =>
       {
           options.TokenValidationParameters = new TokenValidationParameters
           {
               ValidateIssuerSigningKey = true,
               IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("AppSettings:Token")
                                                                                         .Value)),
               ValidateIssuer = false,
               ValidateAudience = false
           };
       });

builder.Services.AddCors(p => p.AddPolicy("corsapp",
                                          builder =>
                                          {
                                              builder.WithOrigins("http://localhost:3000")
                                                     .AllowAnyMethod()
                                                     .AllowAnyHeader()
                                                     .AllowCredentials();
                                          }));
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("courierDB")));
var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
