﻿using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace DriveExpressAPI.Models
{
    public class Funcionario : LinksHATEOS
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public Perfil Perfil { get; set; }
    }

    public enum Perfil
    {
        [Display(Name = "Gerente")]
        Gerente,
        [Display(Name = "Funcionario")]
        Funcionario,
        [Display(Name = "Cliente")]
        Cliente
    }
}