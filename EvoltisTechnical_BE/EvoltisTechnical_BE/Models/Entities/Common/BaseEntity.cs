using System.ComponentModel.DataAnnotations;

namespace EvoltisTechnical_BE.Models.Entities.Common
{
    public class BaseEntity : AuditableEntity, ILogicalDeletable
    {
        [Key]
        public int Id { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
