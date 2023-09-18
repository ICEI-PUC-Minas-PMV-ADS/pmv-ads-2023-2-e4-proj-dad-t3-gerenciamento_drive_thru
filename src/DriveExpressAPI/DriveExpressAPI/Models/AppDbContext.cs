using Microsoft.EntityFrameworkCore;

namespace DriveExpressAPI.Models
{
    public class AppDbContext : DbContext 
    {
        public AppDbContext(DbContextOptions options) : base (options)
        {
        }

        public DbSet<Restaurante> Restaurantes { get; set; }

        public DbSet<Cardapio> Cardapios { get; set; }
    }
}
