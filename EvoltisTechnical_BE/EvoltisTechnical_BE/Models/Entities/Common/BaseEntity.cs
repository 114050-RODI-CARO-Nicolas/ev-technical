using System.ComponentModel.DataAnnotations;

namespace EvoltisTechnical_BE.Models.Entities.Common
{
    public class BaseEntity : AuditableEntity
    {
        [Key]
        public int Id { get; set; } 
    }
}
