using AutoMapper;
using EvoltisTechnical_BE.Models.DTOs.Skill.Response;
using EvoltisTechnical_BE.Repositories.Interfaces;
using EvoltisTechnical_BE.Services.Interfaces;

namespace EvoltisTechnical_BE.Services
{
    public class SkillService : ISkillService
    {

        private readonly ISkillRepository _skillRepository;
        private readonly IMapper _mapper;

        public SkillService(ISkillRepository skillRepository, IMapper mapper)
        {
            _skillRepository=skillRepository;
            _mapper=mapper;
        }

        public async Task<IEnumerable<SkillDTO>> GetAllAsync()
        {
            var skills = await _skillRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<SkillDTO>>(skills);
        }
    }
}
