using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveExpressAPI.Models
{
    [Table("Restaurante")]
    public class Restaurante
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public TipoCategoria Categoria { get; set; }

        [Required]
        public string Endereco { get; set; }

        [Required]
        public string Telefone { get; set; }

        public ICollection <Cardapio> Cardapios { get; set; }
    }

    public enum TipoCategoria
    {
        Brasileira,
        Doces,
        Japonesa,
        Mexicana,
        Italiana,
        FastFood

    }
}
