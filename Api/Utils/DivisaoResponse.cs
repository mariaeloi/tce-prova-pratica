namespace Api.Utils;

public class DivisaoResponse
{
    public double resultado { get; set; }

    public string erro { get; set; }

    public DivisaoResponse(double resultado, string erro)
    {
        this.resultado = resultado;
        this.erro = erro;
    }
}