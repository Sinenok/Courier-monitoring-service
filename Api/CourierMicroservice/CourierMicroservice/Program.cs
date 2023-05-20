using System.Text;
using CourierMicroservice.Context;
using CourierMicroservice.Infrastructure.IoC;
using CourierMicroservice.Services.AuthorizationService;
using CourierMicroservice.Services.OrderService;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();
builder.Services.AddDefaultProblemDetails();
builder.Services.AddDefaultEfCore();
builder.Services.AddScoped<IAuthorizationService, AuthorizationService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IAppDbContext, AppDbContext>();

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
           var value = builder.Configuration.GetSection("AppSettings:Token")
                              .Value;

           if (value != null)
           {
               options.TokenValidationParameters = new TokenValidationParameters
               {
                   ValidateIssuerSigningKey = true,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(value)),
                   ValidateIssuer = false,
                   ValidateAudience = false
               };
           }
       });

builder.Services.AddCors(p => p.AddPolicy("corsApp",
                                          policyBuilder =>
                                          {
                                              policyBuilder.WithOrigins("http://localhost:3000")
                                                           .AllowAnyMethod()
                                                           .AllowAnyHeader()
                                                           .AllowCredentials();
                                          }));

var app = builder.Build();
app.AddAutomaticMigrations();
app.UseProblemDetails();
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("corsApp");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
