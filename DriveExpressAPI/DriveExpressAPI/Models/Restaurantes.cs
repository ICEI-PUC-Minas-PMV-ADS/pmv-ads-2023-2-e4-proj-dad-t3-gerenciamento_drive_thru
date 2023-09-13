using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveExpressAPI.Models
{
    [Table("Restaurantes")]
    public class Restaurantes
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Categoria { get; set; }

        [Required]
        public string Endereco { get; set; }

        [Required]
        public string Telefone { get; set; }

        public ICollection <Cardapio> Cardapios { get; set; }
    }
}
