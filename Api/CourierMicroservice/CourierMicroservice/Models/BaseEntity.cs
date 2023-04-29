using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CourierMicroservice.Models;

/// <summary>
/// Представляет базовую сущность.
/// </summary>
public abstract class BaseEntity
{
    /// <summary>
    /// Идентификатор сущности.
    /// </summary>
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid Id { get; set; }
}
