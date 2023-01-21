﻿// <auto-generated />
using System;
using CourierMicroservice.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CourierMicroservice.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CourierMicroservice.Models.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<float>("DeliveryCost")
                        .HasColumnType("real");

                    b.Property<string>("DeliveryDate")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("DeliveryScore")
                        .HasColumnType("integer");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("OrderStatusId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("PackageInformationId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("PaymentMethodId")
                        .HasColumnType("uuid");

                    b.Property<string>("ReceiverAdress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReceiverName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("ReceiverUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("SenderAdress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SenderName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("SenderUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("TrackNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("OrderStatusId");

                    b.HasIndex("PackageInformationId");

                    b.HasIndex("PaymentMethodId");

                    b.HasIndex("ReceiverUserId");

                    b.HasIndex("SenderUserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("CourierMicroservice.Models.OrderStatus", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<int>("Code")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("OrderStatuses");
                });

            modelBuilder.Entity("CourierMicroservice.Models.PackageInformation", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<float>("Cost")
                        .HasColumnType("real");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("ShortDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Weight")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("PackageInformations");
                });

            modelBuilder.Entity("CourierMicroservice.Models.PaymentMethod", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<int>("Code")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("PaymentMethods");
                });

            modelBuilder.Entity("CourierMicroservice.Models.Right", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<int>("Code")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Rights");
                });

            modelBuilder.Entity("CourierMicroservice.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("CreatedUserId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("ModifiedUserId")
                        .HasColumnType("uuid");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("RefreshToken")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("TokenCreated")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("TokenExpires")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CourierMicroservice.Models.Order", b =>
                {
                    b.HasOne("CourierMicroservice.Models.OrderStatus", "OrderStatus")
                        .WithMany()
                        .HasForeignKey("OrderStatusId");

                    b.HasOne("CourierMicroservice.Models.PackageInformation", "PackageInformation")
                        .WithMany()
                        .HasForeignKey("PackageInformationId");

                    b.HasOne("CourierMicroservice.Models.PaymentMethod", "PaymentMethod")
                        .WithMany()
                        .HasForeignKey("PaymentMethodId");

                    b.HasOne("CourierMicroservice.Models.User", "ReceiverUser")
                        .WithMany()
                        .HasForeignKey("ReceiverUserId");

                    b.HasOne("CourierMicroservice.Models.User", "SenderUser")
                        .WithMany()
                        .HasForeignKey("SenderUserId");

                    b.Navigation("OrderStatus");

                    b.Navigation("PackageInformation");

                    b.Navigation("PaymentMethod");

                    b.Navigation("ReceiverUser");

                    b.Navigation("SenderUser");
                });
#pragma warning restore 612, 618
        }
    }
}
