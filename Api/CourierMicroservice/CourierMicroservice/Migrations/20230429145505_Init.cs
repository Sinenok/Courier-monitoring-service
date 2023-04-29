using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "orderStatuses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    Code = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
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
                    Cost = table.Column<float>(type: "real", nullable: false),
                    ShortDescription = table.Column<string>(type: "text", nullable: false),
                    Weight = table.Column<string>(type: "text", nullable: false),
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
                    Code = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
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
                    Code = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
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
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Login = table.Column<string>(type: "text", nullable: false),
                    Mail = table.Column<string>(type: "text", nullable: true),
                    PasswordHash = table.Column<byte[]>(type: "bytea", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "bytea", nullable: false),
                    Phone = table.Column<string>(type: "text", nullable: true),
                    RefreshToken = table.Column<string>(type: "text", nullable: false),
                    RightId = table.Column<Guid>(type: "uuid", nullable: false),
                    TokenCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    TokenExpires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_users_rights_RightId",
                        column: x => x.RightId,
                        principalTable: "rights",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                },
                comment: "Пользователи");

            migrationBuilder.CreateTable(
                name: "orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, comment: "Уникальный идентификатор"),
                    CourierUserId = table.Column<Guid>(type: "uuid", nullable: true),
                    DeliveryCost = table.Column<float>(type: "real", nullable: false),
                    DeliveryDate = table.Column<string>(type: "text", nullable: false),
                    DeliveryScore = table.Column<int>(type: "integer", nullable: false),
                    OrderStatusId = table.Column<Guid>(type: "uuid", nullable: true),
                    PackageInformationId = table.Column<Guid>(type: "uuid", nullable: true),
                    PaymentMethodId = table.Column<Guid>(type: "uuid", nullable: true),
                    ReceiverAddress = table.Column<string>(type: "text", nullable: false),
                    ReceiverName = table.Column<string>(type: "text", nullable: false),
                    ReceiverUserId = table.Column<Guid>(type: "uuid", nullable: true),
                    SenderAddress = table.Column<string>(type: "text", nullable: false),
                    SenderName = table.Column<string>(type: "text", nullable: false),
                    SenderUserId = table.Column<Guid>(type: "uuid", nullable: true),
                    TrackNumber = table.Column<string>(type: "text", nullable: false),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0))),
                    UpdatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValue: new DateTimeOffset(new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_orders_orderStatuses_OrderStatusId",
                        column: x => x.OrderStatusId,
                        principalTable: "orderStatuses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_packageInformation_PackageInformationId",
                        column: x => x.PackageInformationId,
                        principalTable: "packageInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_paymentMethods_PaymentMethodId",
                        column: x => x.PaymentMethodId,
                        principalTable: "paymentMethods",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_users_CourierUserId",
                        column: x => x.CourierUserId,
                        principalTable: "users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_users_ReceiverUserId",
                        column: x => x.ReceiverUserId,
                        principalTable: "users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_orders_users_SenderUserId",
                        column: x => x.SenderUserId,
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
                name: "IX_orders_CourierUserId",
                table: "orders",
                column: "CourierUserId");

            migrationBuilder.CreateIndex(
                name: "IX_orders_OrderStatusId",
                table: "orders",
                column: "OrderStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_orders_PackageInformationId",
                table: "orders",
                column: "PackageInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_orders_PaymentMethodId",
                table: "orders",
                column: "PaymentMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_orders_ReceiverUserId",
                table: "orders",
                column: "ReceiverUserId");

            migrationBuilder.CreateIndex(
                name: "IX_orders_SenderUserId",
                table: "orders",
                column: "SenderUserId");

            migrationBuilder.CreateIndex(
                name: "IX_users_RightId",
                table: "users",
                column: "RightId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "orders");

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
