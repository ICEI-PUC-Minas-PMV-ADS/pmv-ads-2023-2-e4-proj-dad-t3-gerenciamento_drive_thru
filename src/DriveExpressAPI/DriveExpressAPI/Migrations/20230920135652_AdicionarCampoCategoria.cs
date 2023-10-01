using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveExpressAPI.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarCampoCategoria : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cardápio_Restaurantes_RestaurantesId",
                table: "Cardápio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cardápio",
                table: "Cardápio");

            migrationBuilder.DropIndex(
                name: "IX_Cardápio_RestaurantesId",
                table: "Cardápio");

            migrationBuilder.DropColumn(
                name: "RestaurantesId",
                table: "Cardápio");

            migrationBuilder.RenameTable(
                name: "Cardápio",
                newName: "Cardapios");

            migrationBuilder.AlterColumn<int>(
                name: "Categoria",
                table: "Restaurantes",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "Tipo",
                table: "Cardapios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cardapios",
                table: "Cardapios",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Cardapios_RestauranteId",
                table: "Cardapios",
                column: "RestauranteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cardapios_Restaurantes_RestauranteId",
                table: "Cardapios",
                column: "RestauranteId",
                principalTable: "Restaurantes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cardapios_Restaurantes_RestauranteId",
                table: "Cardapios");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cardapios",
                table: "Cardapios");

            migrationBuilder.DropIndex(
                name: "IX_Cardapios_RestauranteId",
                table: "Cardapios");

            migrationBuilder.DropColumn(
                name: "Tipo",
                table: "Cardapios");

            migrationBuilder.RenameTable(
                name: "Cardapios",
                newName: "Cardápio");

            migrationBuilder.AlterColumn<string>(
                name: "Categoria",
                table: "Restaurantes",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "RestaurantesId",
                table: "Cardápio",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cardápio",
                table: "Cardápio",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Cardápio_RestaurantesId",
                table: "Cardápio",
                column: "RestaurantesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cardápio_Restaurantes_RestaurantesId",
                table: "Cardápio",
                column: "RestaurantesId",
                principalTable: "Restaurantes",
                principalColumn: "Id");
        }
    }
}
