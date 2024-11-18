using EvoltisTechnical_BE.Models.Entities.Common;
using System.ComponentModel.DataAnnotations;

namespace EvoltisTechnical_BE.Models.Entities
{
    public class SkillEntity : BaseEntity
    {

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
    }
}
