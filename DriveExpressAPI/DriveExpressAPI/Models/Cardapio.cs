using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveExpressAPI.Models
{
    [Table("Cardápio")]
    public class Cardapio
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Comida { get; set; }

        [Required]
        public decimal Valor { get; set; }

        [Required]
        public int Quantidade { get; set; }

        public string? Observacao { get; set; }

        [Required]
        public int RestauranteId { get; set; }

        public Restaurantes Restaurantes { get; set; }
    }
}
