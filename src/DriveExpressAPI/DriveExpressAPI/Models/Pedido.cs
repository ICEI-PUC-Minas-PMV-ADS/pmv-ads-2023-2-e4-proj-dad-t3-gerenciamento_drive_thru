namespace DriveExpressAPI.Models
{
    public class Pedido : LinksHATEOS
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Restaurante { get; set; }

        public string Cardapio { get; set; }

        public Restaurante Restaurantes { get; set; }

        public Cardapio Cardapios { get; set; }
    }
}
