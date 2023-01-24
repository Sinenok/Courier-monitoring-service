namespace CourierMicroservice.Models;

public class RefreshToken
{
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Expires { get; set; }
    public string Token { get; set; } = string.Empty;
}
