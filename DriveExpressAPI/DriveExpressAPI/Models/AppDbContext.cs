using Microsoft.EntityFrameworkCore;

namespace DriveExpressAPI.Models
{
    public class AppDbContext : DbContext 
    {
        public AppDbContext(DbContextOptions options) : base (options)
        {
        }

        public DbSet<Restaurantes> Restaurantes { get; set; }

        public DbSet<Cardapio> Cardapio { get; set; }
    }
}
