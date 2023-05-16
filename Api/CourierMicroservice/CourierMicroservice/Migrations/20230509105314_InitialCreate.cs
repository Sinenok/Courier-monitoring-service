﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "orderStatuses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    Code = table.Column<int>(type: "integer", nullable: false, comment: "Код статуса"),
                    Name = table.Column<string>(type: "text", nullable: false, comment: "Название статуса"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orderStatuses", x => x.Id);
                },
                comment: "Статус заказа");

            migrationBuilder.CreateTable(
                name: "packageInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    Cost = table.Column<decimal>(type: "numeric(18,2)", nullable: false, comment: "Цена"),
                    ShortDescription = table.Column<string>(type: "text", nullable: false, comment: "Краткое описание"),
                    Weight = table.Column<decimal>(type: "numeric(18,2)", nullable: false, comment: "Вес"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_packageInformation", x => x.Id);
                },
                comment: "Информация о посылке");

            migrationBuilder.CreateTable(
                name: "paymentMethods",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    Code = table.Column<int>(type: "integer", nullable: false, comment: "Код"),
                    Name = table.Column<string>(type: "text", nullable: false, comment: "Название"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_paymentMethods", x => x.Id);
                },
                comment: "Метод оплаты заказа");

            migrationBuilder.CreateTable(
                name: "rights",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    Code = table.Column<int>(type: "integer", nullable: false, comment: "Код"),
                    Name = table.Column<string>(type: "text", nullable: false, comment: "Название"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_rights", x => x.Id);
                },
                comment: "Права");

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    FirstName = table.Column<string>(type: "text", nullable: false, comment: "Имя"),
                    LastName = table.Column<string>(type: "text", nullable: true, comment: "Фамилия"),
                    Login = table.Column<string>(type: "text", nullable: false, comment: "Логин пользователя"),
                    Mail = table.Column<string>(type: "text", nullable: false, comment: "Эл. почта"),
                    PasswordHash = table.Column<byte[]>(type: "bytea", nullable: false, comment: "Хеш пароля"),
                    PasswordSalt = table.Column<byte[]>(type: "bytea", nullable: false, comment: "Соль пароля"),
                    Phone = table.Column<string>(type: "text", nullable: true, comment: "Номер телефона"),
                    RefreshToken = table.Column<string>(type: "text", nullable: false, comment: "Рефреш-токен"),
                    rightid = table.Column<Guid>(name: "right_id", type: "uuid", nullable: false, comment: "Идентификатор прав пользователя"),
                    TokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, comment: "Дата создания токена"),
                    TokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, comment: "Дата истечения токена"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_users_rights_right_id",
                        column: x => x.rightid,
                        principalTable: "rights",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                },
                comment: "Пользователи");

            migrationBuilder.CreateTable(
                name: "couriers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    userid = table.Column<Guid>(name: "user_id", type: "uuid", nullable: false, comment: "Идентификатор пользователя"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_couriers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_couriers_users_user_id",
                        column: x => x.userid,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                },
                comment: "Курьеры");

            migrationBuilder.CreateTable(
                name: "orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    courierid = table.Column<Guid>(name: "courier_id", type: "uuid", nullable: true, comment: "Идентификатор курьера"),
                    DeliveryCost = table.Column<decimal>(type: "numeric", nullable: false, comment: "Цена доставки"),
                    DeliveryDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true, comment: "Дата доставки"),
                    orderstatusid = table.Column<Guid>(name: "order_status_id", type: "uuid", nullable: true, comment: "Идентификатор статуса заказа"),
                    packageinformationid = table.Column<Guid>(name: "package_information_id", type: "uuid", nullable: false, comment: "Идентификатор посылки"),
                    paymentmethodid = table.Column<Guid>(name: "payment_method_id", type: "uuid", nullable: false, comment: "Идентификатор метода оплаты"),
                    receiverid = table.Column<Guid>(name: "receiver_id", type: "uuid", nullable: true, comment: "Идентификатор получателя"),
                    ReceiverAddress = table.Column<string>(type: "text", nullable: false, comment: "Адрес получателя"),
                    ReceiverName = table.Column<string>(type: "text", nullable: false, comment: "Имя получателя"),
                    senderid = table.Column<Guid>(name: "sender_id", type: "uuid", nullable: true, comment: "Идентификатор связанной цели"),
                    SenderAddress = table.Column<string>(type: "text", nullable: false, comment: "Адрес отправителя"),
                    SenderName = table.Column<string>(type: "text", nullable: false, comment: "Имя отправителя"),
                    TrackNumber = table.Column<Guid>(type: "uuid", nullable: false, comment: "Номер отслеживания"),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_orders_couriers_courier_id",
                        column: x => x.courierid,
                        principalTable: "couriers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_orderStatuses_order_status_id",
                        column: x => x.orderstatusid,
                        principalTable: "orderStatuses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_packageInformation_package_information_id",
                        column: x => x.packageinformationid,
                        principalTable: "packageInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_orders_paymentMethods_payment_method_id",
                        column: x => x.paymentmethodid,
                        principalTable: "paymentMethods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_orders_users_receiver_id",
                        column: x => x.receiverid,
                        principalTable: "users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_users_sender_id",
                        column: x => x.senderid,
                        principalTable: "users",
                        principalColumn: "Id");
                },
                comment: "Заказ");

            migrationBuilder.InsertData(
                table: "paymentMethods",
                columns: new[] { "Id", "Code", "Name" },
                values: new object[,]
                {
                    { new Guid("424b93cd-ca77-4bb5-b20b-e0f1201bc350"), 2, "Online" },
                    { new Guid("7373f370-6206-41c7-b4e7-91caddf1a35a"), 1, "Card" },
                    { new Guid("d353d9a8-b9e2-4b8e-9207-e898ef328b52"), 0, "Cash" }
                });

            migrationBuilder.InsertData(
                table: "rights",
                columns: new[] { "Id", "Code", "Name" },
                values: new object[,]
                {
                    { new Guid("3dfcd6f3-1775-4e1b-91db-fdccea3f83eb"), 1, "Admin" },
                    { new Guid("e10222c4-7723-498b-8bf4-83252378e0c9"), 0, "User" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_couriers_user_id",
                table: "couriers",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_courier_id",
                table: "orders",
                column: "courier_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_order_status_id",
                table: "orders",
                column: "order_status_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_package_information_id",
                table: "orders",
                column: "package_information_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_payment_method_id",
                table: "orders",
                column: "payment_method_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_receiver_id",
                table: "orders",
                column: "receiver_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_sender_id",
                table: "orders",
                column: "sender_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_right_id",
                table: "users",
                column: "right_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "orders");

            migrationBuilder.DropTable(
                name: "couriers");

            migrationBuilder.DropTable(
                name: "orderStatuses");

            migrationBuilder.DropTable(
                name: "packageInformation");

            migrationBuilder.DropTable(
                name: "paymentMethods");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "rights");
        }
    }
}