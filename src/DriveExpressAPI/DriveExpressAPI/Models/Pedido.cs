using System.ComponentModel.DataAnnotations;

namespace DriveExpressAPI.Models
{
    public class Pedido : LinksHATEOS
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public int Quantidade { get; set; }

        [Required]
        public double Valor { get; set; }

        [Required]
        public int RestauranteId { get; set; }

        [Required]
        public string NomeUsuario { get; set; }

        public Cardapio Cardapios { get; set; }
    }
}
