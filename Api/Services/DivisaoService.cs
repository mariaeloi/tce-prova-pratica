using Api.Exceptions;

namespace Api.Services;

public class DivisaoService : IDivisaoService
{
    public double calcular(double dividendo, double divisor)
    {
        if(divisor == 0) {
            throw new DivisaoPorZeroException("Não é possível dividir por 0");
        }

        return dividendo/divisor;
    }
}