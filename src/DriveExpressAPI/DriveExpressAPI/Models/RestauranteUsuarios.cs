﻿namespace DriveExpressAPI.Models
{
    public class RestauranteUsuarios
    {
        public int RestauranteId { get; set; }
        public Restaurante Restaurante { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

    }
}
