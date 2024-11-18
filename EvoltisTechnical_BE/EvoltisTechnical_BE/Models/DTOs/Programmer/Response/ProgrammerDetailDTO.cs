using EvoltisTechnical_BE.Models.DTOs.Skill.Response;

namespace EvoltisTechnical_BE.Models.DTOs.Programmer.Response
{
    public class ProgrammerDetailDTO : ProgrammerDTO
    {
        public List<SkillDTO> Skills { get; set; }
    }
}
