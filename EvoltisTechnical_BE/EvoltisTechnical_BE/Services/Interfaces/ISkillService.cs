using EvoltisTechnical_BE.Models.DTOs.Skill.Response;

namespace EvoltisTechnical_BE.Services.Interfaces
{
    public interface ISkillService
    {
        Task<IEnumerable<SkillDTO>> GetAllAsync();
    }
}
