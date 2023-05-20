using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class SetOrderStatusRequired : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_orderStatuses_order_status_id",
                table: "orders");

            migrationBuilder.AlterColumn<Guid>(
                name: "order_status_id",
                table: "orders",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                comment: "Идентификатор статуса заказа",
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true,
                oldComment: "Идентификатор статуса заказа");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_orderStatuses_order_status_id",
                table: "orders",
                column: "order_status_id",
                principalTable: "orderStatuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_orderStatuses_order_status_id",
                table: "orders");

            migrationBuilder.AlterColumn<Guid>(
                name: "order_status_id",
                table: "orders",
                type: "uuid",
                nullable: true,
                comment: "Идентификатор статуса заказа",
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldComment: "Идентификатор статуса заказа");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_orderStatuses_order_status_id",
                table: "orders",
                column: "order_status_id",
                principalTable: "orderStatuses",
                principalColumn: "Id");
        }
    }
}
