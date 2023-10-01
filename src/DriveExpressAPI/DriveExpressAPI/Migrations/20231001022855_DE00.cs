using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveExpressAPI.Migrations
{
    /// <inheritdoc />
    public partial class DE00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Funcionarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Perfil = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Restaurantes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Endereco = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Categoria = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Restaurantes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cardapios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Comida = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Valor = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantidade = table.Column<int>(type: "int", nullable: false),
                    Observacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Tipo = table.Column<int>(type: "int", nullable: false),
                    RestauranteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cardapios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cardapios_Restaurantes_RestauranteId",
                        column: x => x.RestauranteId,
                        principalTable: "Restaurantes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RestauranteUsuarios",
                columns: table => new
                {
                    RestauranteId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestauranteUsuarios", x => new { x.RestauranteId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_RestauranteUsuarios_Restaurantes_RestauranteId",
                        column: x => x.RestauranteId,
                        principalTable: "Restaurantes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RestauranteUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LinkDto",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Href = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Metodo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CardapioId = table.Column<int>(type: "int", nullable: true),
                    RestauranteId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LinkDto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LinkDto_Cardapios_CardapioId",
                        column: x => x.CardapioId,
                        principalTable: "Cardapios",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LinkDto_Restaurantes_RestauranteId",
                        column: x => x.RestauranteId,
                        principalTable: "Restaurantes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cardapios_RestauranteId",
                table: "Cardapios",
                column: "RestauranteId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_CardapioId",
                table: "LinkDto",
                column: "CardapioId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_RestauranteId",
                table: "LinkDto",
                column: "RestauranteId");

            migrationBuilder.CreateIndex(
                name: "IX_RestauranteUsuarios_UsuarioId",
                table: "RestauranteUsuarios",
                column: "UsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Funcionarios");

            migrationBuilder.DropTable(
                name: "LinkDto");

            migrationBuilder.DropTable(
                name: "RestauranteUsuarios");

            migrationBuilder.DropTable(
                name: "Cardapios");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Restaurantes");
        }
    }
}
