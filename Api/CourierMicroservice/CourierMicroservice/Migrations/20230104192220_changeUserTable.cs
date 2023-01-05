using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class changeUserTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("1759372b-b833-4617-8eae-509aed610345"));

            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "Users",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<Guid>(
                name: "CreatedUserId",
                table: "Users",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<DateTime>(
                name: "Modified",
                table: "Users",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ModifiedUserId",
                table: "Users",
                type: "uuid",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Created", "CreatedUserId", "FirstName", "LastName", "Login", "Mail", "Modified", "ModifiedUserId", "Password", "Phone", "RightId" },
                values: new object[] { new Guid("b1cd1340-b48f-4840-af9c-d61d258d122d"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new Guid("00000000-0000-0000-0000-000000000000"), "FirstName1", "LastName1", "Login1", "Mail1", null, null, "password1", "Phone1", null });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("b1cd1340-b48f-4840-af9c-d61d258d122d"));

            migrationBuilder.DropColumn(
                name: "Created",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CreatedUserId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Modified",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ModifiedUserId",
                table: "Users");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "FirstName", "LastName", "Login", "Mail", "Password", "Phone", "RightId" },
                values: new object[] { new Guid("1759372b-b833-4617-8eae-509aed610345"), "FirstName1", "LastName1", "Login1", "Mail1", "password1", "Phone1", null });
        }
    }
}
