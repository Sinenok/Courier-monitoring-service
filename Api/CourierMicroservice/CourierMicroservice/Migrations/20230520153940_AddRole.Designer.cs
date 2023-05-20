﻿// <auto-generated />
using System;
using CourierMicroservice.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CourierMicroservice.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230520153940_AddRole")]
    partial class AddRole
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CourierMicroservice.Models.Courier", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("user_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор пользователя");

                    b.HasKey("Id");

                    b.HasIndex("user_id");

                    b.ToTable("couriers", null, t =>
                        {
                            t.HasComment("Курьеры");
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<decimal>("DeliveryCost")
                        .HasColumnType("numeric")
                        .HasComment("Цена доставки");

                    b.Property<DateTime?>("DeliveryDate")
                        .HasColumnType("timestamp with time zone")
                        .HasComment("Дата доставки");

                    b.Property<string>("ReceiverAddress")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Адрес получателя");

                    b.Property<string>("ReceiverName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Имя получателя");

                    b.Property<string>("SenderAddress")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Адрес отправителя");

                    b.Property<string>("SenderName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Имя отправителя");

                    b.Property<Guid>("TrackNumber")
                        .HasColumnType("uuid")
                        .HasComment("Номер отслеживания");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("courier_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор курьера");

                    b.Property<Guid?>("order_status_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор статуса заказа");

                    b.Property<Guid>("package_information_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор посылки");

                    b.Property<Guid>("payment_method_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор метода оплаты");

                    b.Property<Guid?>("receiver_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор получателя");

                    b.Property<Guid?>("sender_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор связанной цели");

                    b.HasKey("Id");

                    b.HasIndex("courier_id");

                    b.HasIndex("order_status_id");

                    b.HasIndex("package_information_id");

                    b.HasIndex("payment_method_id");

                    b.HasIndex("receiver_id");

                    b.HasIndex("sender_id");

                    b.ToTable("orders", null, t =>
                        {
                            t.HasComment("Заказ");
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.OrderStatus", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<int>("Code")
                        .HasColumnType("integer")
                        .HasComment("Код статуса");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Название статуса");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("orderStatuses", null, t =>
                        {
                            t.HasComment("Статус заказа");
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.PackageInformation", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<decimal>("Cost")
                        .HasColumnType("decimal(18,2)")
                        .HasComment("Цена");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("ShortDescription")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Краткое описание");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<decimal>("Weight")
                        .HasColumnType("decimal(18,2)")
                        .HasComment("Вес");

                    b.HasKey("Id");

                    b.ToTable("packageInformation", null, t =>
                        {
                            t.HasComment("Информация о посылке");
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.PaymentMethod", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<int>("Code")
                        .HasColumnType("integer")
                        .HasComment("Код");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Название");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("paymentMethods", null, t =>
                        {
                            t.HasComment("Метод оплаты заказа");
                        });

                    b.HasData(
                        new
                        {
                            Id = new Guid("d353d9a8-b9e2-4b8e-9207-e898ef328b52"),
                            Code = 0,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "Cash",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        },
                        new
                        {
                            Id = new Guid("7373f370-6206-41c7-b4e7-91caddf1a35a"),
                            Code = 1,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "Card",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        },
                        new
                        {
                            Id = new Guid("424b93cd-ca77-4bb5-b20b-e0f1201bc350"),
                            Code = 2,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "Online",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.Right", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<int>("Code")
                        .HasColumnType("integer")
                        .HasComment("Код");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Название");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("rights", null, t =>
                        {
                            t.HasComment("Права");
                        });

                    b.HasData(
                        new
                        {
                            Id = new Guid("e10222c4-7723-498b-8bf4-83252378e0c9"),
                            Code = 0,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "User",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        },
                        new
                        {
                            Id = new Guid("3dfcd6f3-1775-4e1b-91db-fdccea3f83eb"),
                            Code = 1,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "Admin",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        },
                        new
                        {
                            Id = new Guid("60eb98f3-9f8c-4c12-93d4-66f208caa6f6"),
                            Code = 2,
                            CreatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                            Name = "Courier",
                            UpdatedDate = new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasComment("Уникальный идентификатор");

                    b.Property<DateTimeOffset>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Имя");

                    b.Property<string>("LastName")
                        .HasColumnType("text")
                        .HasComment("Фамилия");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Логин пользователя");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Эл. почта");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("bytea")
                        .HasComment("Хеш пароля");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("bytea")
                        .HasComment("Соль пароля");

                    b.Property<string>("Phone")
                        .HasColumnType("text")
                        .HasComment("Номер телефона");

                    b.Property<string>("RefreshToken")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasComment("Рефреш-токен");

                    b.Property<DateTime>("TokenCreated")
                        .HasColumnType("timestamp with time zone")
                        .HasComment("Дата создания токена");

                    b.Property<DateTime>("TokenExpires")
                        .HasColumnType("timestamp with time zone")
                        .HasComment("Дата истечения токена");

                    b.Property<DateTimeOffset>("UpdatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("right_id")
                        .HasColumnType("uuid")
                        .HasComment("Идентификатор прав пользователя");

                    b.HasKey("Id");

                    b.HasIndex("right_id");

                    b.ToTable("users", null, t =>
                        {
                            t.HasComment("Пользователи");
                        });
                });

            modelBuilder.Entity("CourierMicroservice.Models.Courier", b =>
                {
                    b.HasOne("CourierMicroservice.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("user_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("CourierMicroservice.Models.Order", b =>
                {
                    b.HasOne("CourierMicroservice.Models.Courier", "Courier")
                        .WithMany()
                        .HasForeignKey("courier_id");

                    b.HasOne("CourierMicroservice.Models.OrderStatus", "OrderStatus")
                        .WithMany()
                        .HasForeignKey("order_status_id");

                    b.HasOne("CourierMicroservice.Models.PackageInformation", "PackageInformation")
                        .WithMany()
                        .HasForeignKey("package_information_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CourierMicroservice.Models.PaymentMethod", "PaymentMethod")
                        .WithMany()
                        .HasForeignKey("payment_method_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CourierMicroservice.Models.User", "Receiver")
                        .WithMany()
                        .HasForeignKey("receiver_id");

                    b.HasOne("CourierMicroservice.Models.User", "Sender")
                        .WithMany()
                        .HasForeignKey("sender_id");

                    b.Navigation("Courier");

                    b.Navigation("OrderStatus");

                    b.Navigation("PackageInformation");

                    b.Navigation("PaymentMethod");

                    b.Navigation("Receiver");

                    b.Navigation("Sender");
                });

            modelBuilder.Entity("CourierMicroservice.Models.User", b =>
                {
                    b.HasOne("CourierMicroservice.Models.Right", "Right")
                        .WithMany()
                        .HasForeignKey("right_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Right");
                });
#pragma warning restore 612, 618
        }
    }
}
