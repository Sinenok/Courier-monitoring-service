using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class AddCourierLink : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CourierUserId",
                table: "Orders",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CourierUserId",
                table: "Orders",
                column: "CourierUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Users_CourierUserId",
                table: "Orders",
                column: "CourierUserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Users_CourierUserId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_CourierUserId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "CourierUserId",
                table: "Orders");
        }
    }
}
