using EvoltisTechnical_BE.Models.Entities.Common;
using System.ComponentModel.DataAnnotations;

namespace EvoltisTechnical_BE.Models.Entities
{
    public class ProgrammerEntity : BaseEntity
    {

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
        [Required]
        [StringLength(50)]
        public string PhoneNumber { get; set; }
        [StringLength(100)]
        [EmailAddress]
        public string EmailAddress { get; set; }

        public bool IsActive { get; set; } = true;

        public ICollection<SkillEntity> Skills { get; set; }

        public ProgrammerEntity() { 
            Skills = new HashSet<SkillEntity>();
        }
    }
}
