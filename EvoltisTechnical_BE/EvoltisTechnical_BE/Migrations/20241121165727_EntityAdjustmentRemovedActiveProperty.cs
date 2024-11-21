using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EvoltisTechnical_BE.Migrations
{
    /// <inheritdoc />
    public partial class EntityAdjustmentRemovedActiveProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9610), new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9627) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9628), new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9629) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9630), new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9630) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9631), new DateTime(2024, 11, 21, 13, 57, 27, 81, DateTimeKind.Local).AddTicks(9631) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4364), new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4383) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4386), new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4386) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4387), new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4388) });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedAt", "LastUpdatedAt" },
                values: new object[] { new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4389), new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4389) });
        }
    }
}
