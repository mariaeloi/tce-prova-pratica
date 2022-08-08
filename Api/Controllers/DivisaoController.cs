using Api.Exceptions;
using Api.Utils;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

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
}