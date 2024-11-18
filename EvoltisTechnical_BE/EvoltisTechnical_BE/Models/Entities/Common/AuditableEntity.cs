namespace EvoltisTechnical_BE.Models.Entities.Common
{
    public class AuditableEntity
    {

        public DateTime CreatedAt { get; set; }
        public DateTime LastUpdatedAt { get; set; }

        public AuditableEntity()
        {
            CreatedAt = DateTime.Now;
            LastUpdatedAt = DateTime.Now;
        }
    }
}
