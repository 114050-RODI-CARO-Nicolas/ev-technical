using EvoltisTechnical_BE.Data;
using EvoltisTechnical_BE.Mappings;
using EvoltisTechnical_BE.Repositories;
using EvoltisTechnical_BE.Repositories.Interfaces;
using EvoltisTechnical_BE.Services;
using EvoltisTechnical_BE.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

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




// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
