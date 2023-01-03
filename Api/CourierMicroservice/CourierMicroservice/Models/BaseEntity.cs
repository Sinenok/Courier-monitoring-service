using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CourierMicroservice.Models;

/// <summary>
/// Базовая сущность
/// </summary>
public abstract class BaseEntity
{
    /// <summary>
    /// Идентификатор сущности
    /// </summary>
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid Id { get; set; }
}