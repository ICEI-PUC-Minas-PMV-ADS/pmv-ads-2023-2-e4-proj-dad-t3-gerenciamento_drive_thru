using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DriveExpressAPI.Models
{
    [Table("Usuarios")]
    public class Usuario : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [JsonIgnore]
        public string Password { get; set;}

        [Required]
        public Perfil Perfil { get; set; }

        public ICollection<RestauranteUsuarios> Restaurantes { get; set; }
    }

}
