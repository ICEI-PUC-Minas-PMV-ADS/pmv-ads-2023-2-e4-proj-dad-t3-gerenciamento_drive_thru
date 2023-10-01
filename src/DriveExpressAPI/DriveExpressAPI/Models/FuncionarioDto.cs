using System.ComponentModel.DataAnnotations;

namespace DriveExpressAPI.Models
{
    public class FuncionarioDto
    {
        public int? Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public Perfil Perfil { get; set; }
    }
}
