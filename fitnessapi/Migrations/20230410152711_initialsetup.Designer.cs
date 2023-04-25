﻿// <auto-generated />
using System;
using FitnessTracker.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FitnessTracker.Migrations
{
    [DbContext(typeof(FitnessTrackerDbContext))]
    [Migration("20230410152711_initialsetup")]
    partial class initialsetup
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("FitnessTracker.Models.FitnessTracker", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CaloriesBurned")
                        .HasColumnType("int");

                    b.Property<decimal>("Distance")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int>("HeartRate")
                        .HasColumnType("int");

                    b.Property<decimal>("SleepDuration")
                        .HasColumnType("decimal(4,2)");

                    b.Property<int>("Steps")
                        .HasColumnType("int");

                    b.Property<DateTime>("Workout_Date")
                        .HasColumnType("date");

                    b.HasKey("Id");

                    b.ToTable("FitnessTracker");
                });
#pragma warning restore 612, 618
        }
    }
}