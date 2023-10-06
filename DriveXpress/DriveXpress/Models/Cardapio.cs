﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveXpress.Models
{
    [Table("Produtos")]
    public class Cardapio : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public int Quantidade { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public double Valor { get; set; } 
        [Required]
        public TipoProduto Tipo { get; set; }  

        [Required]
        public int RestauranteId { get; set; } //produto pertence a um unico restaurante (produto associado a Key de restaurante)
        
        public Restaurante Restaurante { get; set; } //retorna dados restaurante
        
    }
    public enum TipoProduto
    {
        Bebida,
        Comida
    }
}


//Inserir campo observação