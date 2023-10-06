﻿using DriveExpressAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DriveExpressAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RestaurantesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Restaurantes.ToListAsync();

            return Ok(model);
        }

        [Authorize(Roles = "Gerente")]
        [HttpPost]
        public async Task<ActionResult> Create(Restaurante model)
        {
            if (model.Endereco == null || model.Telefone == null)
            {
                return BadRequest(new { message = "Endereço e Telefone são obrigatórios" });
            }

            _context.Restaurantes.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new {id = model.Id}, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Restaurantes
                .Include(t => t.Cardapios)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [Authorize(Roles = "Gerente")]
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Restaurante model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Restaurantes
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Restaurantes.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize(Roles = "Gerente")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Restaurantes.FindAsync(id);

            if (model == null) return NotFound();

            _context.Restaurantes.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks (Restaurante model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "DELETE"));
        }
    }
}