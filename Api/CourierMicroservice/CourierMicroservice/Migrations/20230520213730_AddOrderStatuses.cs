using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CourierMicroservice.Migrations
{
    /// <inheritdoc />
    public partial class AddOrderStatuses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "orderStatuses",
                columns: new[] { "Id", "Code", "CreatedDate", "Name", "UpdatedDate" },
                values: new object[,]
                {
                    { new Guid("32ba2971-2a5e-435b-87c7-f8022e901c63"), 2, new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "InProgress", new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)) },
                    { new Guid("4fdc6d99-f3fd-49ee-8af9-6ac5531cc40e"), 1, new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "CourierAssigned", new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)) },
                    { new Guid("9171b0ee-7091-4dee-95aa-59c5522a21fd"), 3, new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "Done", new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)) },
                    { new Guid("b63c138c-c36b-4bb1-8dad-b3770512b858"), 0, new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "Created", new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "orderStatuses",
                keyColumn: "Id",
                keyValue: new Guid("32ba2971-2a5e-435b-87c7-f8022e901c63"));

            migrationBuilder.DeleteData(
                table: "orderStatuses",
                keyColumn: "Id",
                keyValue: new Guid("4fdc6d99-f3fd-49ee-8af9-6ac5531cc40e"));

            migrationBuilder.DeleteData(
                table: "orderStatuses",
                keyColumn: "Id",
                keyValue: new Guid("9171b0ee-7091-4dee-95aa-59c5522a21fd"));

            migrationBuilder.DeleteData(
                table: "orderStatuses",
                keyColumn: "Id",
                keyValue: new Guid("b63c138c-c36b-4bb1-8dad-b3770512b858"));
        }
    }
}
