using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EvoltisTechnical_BE.Migrations
{
    /// <inheritdoc />
    public partial class SeedDataForSkillAndIsActiveColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProgrammerSkills_Programmers_ProgrammerId",
                table: "ProgrammerSkills");

            migrationBuilder.RenameColumn(
                name: "ProgrammerId",
                table: "ProgrammerSkills",
                newName: "ProgrammerEntityId");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Skills",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Programmers",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "CreatedAt", "IsActive", "LastUpdatedAt", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4364), true, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4383), "C#" },
                    { 2, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4386), true, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4386), "JavaScript" },
                    { 3, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4387), true, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4388), "Python" },
                    { 4, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4389), true, new DateTime(2024, 11, 19, 0, 14, 56, 246, DateTimeKind.Local).AddTicks(4389), "SQL" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_ProgrammerSkills_Programmers_ProgrammerEntityId",
                table: "ProgrammerSkills",
                column: "ProgrammerEntityId",
                principalTable: "Programmers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProgrammerSkills_Programmers_ProgrammerEntityId",
                table: "ProgrammerSkills");

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Programmers");

            migrationBuilder.RenameColumn(
                name: "ProgrammerEntityId",
                table: "ProgrammerSkills",
                newName: "ProgrammerId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgrammerSkills_Programmers_ProgrammerId",
                table: "ProgrammerSkills",
                column: "ProgrammerId",
                principalTable: "Programmers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
