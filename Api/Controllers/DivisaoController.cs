using Api.Exceptions;
using Api.Utils;
using Api.Services;
using Microsoft.AspNetCore.Mvc;
using Api.Models;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class DivisaoController : ControllerBase
{
    [HttpGet("/Dividir")]
    public IActionResult divisao([FromQuery] double dividendo, [FromQuery] double divisor,
            [FromServices] IDivisaoService divisaoService) {
        
        try {
            double resultado = divisaoService.calcular(dividendo, divisor);
            return Ok(new DivisaoResponse(resultado, ""));
        } catch (DivisaoPorZeroException e) {
            return BadRequest(new DivisaoResponse(0, e.Message));
        }
    }

    
    [HttpPost("/Dividir")]
    public IActionResult divisaoPost([FromBody] Divisao divisao,
            [FromServices] IDivisaoService divisaoService) {
        
        try {
            double resultado = divisaoService.calcular(divisao.dividendo, divisao.divisor);
            return Ok(new DivisaoResponse(resultado, ""));
        } catch (DivisaoPorZeroException e) {
            return BadRequest(new DivisaoResponse(0, e.Message));
        }
    }
}