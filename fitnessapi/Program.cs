using FitnessTracker.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
// using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
// using FitnessTracker.Models;




var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("appsettings.json");

builder.Services.AddDbContext<FitnessTrackerDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("myconnstring")));

builder.Services.AddCors();
// Add services to the container.

builder.Services.AddControllers();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// builder.Services.AddCors(options =>
//     {
//         options.AddDefaultPolicy(builder =>
//         {
//             builder.WithOrigins("https://8081-dffafdafebcfacbdcbaeadbebabcdebdca.project.examly.io")
//                 .AllowAnyHeader()
//                 .AllowAnyMethod();
//         });
//     });

// builder.Services.AddCors(options =>
//             {
//             options.AddPolicy(name: "AllowOrigin",builder => 
//             {
//             builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();   });
//             });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder => builder
        .WithOrigins("https://8081-dffafdafebcfacbdcbaeadbebabcdebdca.project.examly.io") // Replace with your allowed origins
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithExposedHeaders("Content-Disposition"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowOrigin");


app.MapControllers();

app.Run();
