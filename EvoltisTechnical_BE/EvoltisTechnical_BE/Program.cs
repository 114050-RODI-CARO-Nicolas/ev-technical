using EvoltisTechnical_BE.Data;
using EvoltisTechnical_BE.Mappings;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using EvoltisTechnical_BE.Repositories;
using EvoltisTechnical_BE.Repositories.Interfaces;
using EvoltisTechnical_BE.Services;
using EvoltisTechnical_BE.Services.Interfaces;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://0.0.0.0:80");

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("MySQLConnection"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("MySQLConnection")))
);


//Repositories
builder.Services.AddScoped<IProgrammerRepository, ProgrammerRepository>();
builder.Services.AddScoped<ISkillRepository, SkillRepository>();

//Services
builder.Services.AddScoped<IProgrammerService, ProgrammerService>();
builder.Services.AddScoped<ISkillService, SkillService>();

//Validators
builder.Services.AddFluentValidation((options) =>
    options.RegisterValidatorsFromAssembly(Assembly.GetExecutingAssembly()));


// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

Console.WriteLine($"Running in {builder.Environment.EnvironmentName} environment");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}


app.UseAuthorization();

app.MapControllers();

app.Run();
