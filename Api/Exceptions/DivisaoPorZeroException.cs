namespace Api.Exceptions;

[Serializable]
public class DivisaoPorZeroException : Exception
{
    public DivisaoPorZeroException() { }

    public DivisaoPorZeroException(string message)
        : base(message) { }

    public DivisaoPorZeroException(string message, Exception inner)
        : base(message, inner) { }
}