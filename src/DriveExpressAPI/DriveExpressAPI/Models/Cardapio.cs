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
        [Column(TypeName = "decimal(18,2)")]
        public decimal Valor { get; set; }

        [Required]
        public int Quantidade { get; set; }

        public string Observacao { get; set; }

        [Required]
        public TipoProduto Tipo { get; set; }

        [Required]
        public int RestauranteId { get; set; }

        public Restaurante Restaurantes { get; set; }
    }

    public enum TipoProduto
    {
        Bebida,
        Comida
    }
}
