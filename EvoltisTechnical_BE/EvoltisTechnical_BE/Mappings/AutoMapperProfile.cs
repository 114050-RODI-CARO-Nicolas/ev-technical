using AutoMapper;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Response;
using EvoltisTechnical_BE.Models.DTOs.Skill.Response;
using EvoltisTechnical_BE.Models.Entities;

namespace EvoltisTechnical_BE.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() {

            CreateMap<ProgrammerEntity, ProgrammerDTO>();
            CreateMap<ProgrammerEntity, ProgrammerDetailDTO>();
            CreateMap<CreateProgrammerDTO, ProgrammerEntity>()
                .ForMember(dest => dest.Skills, opt => opt.Ignore());
            CreateMap<UpdateProgrammerDTO, ProgrammerEntity>()
                .ForMember(dest => dest.Skills, opt => opt.Ignore())
                .ForAllMembers(opts =>
                {
                    opts.Condition((src, dest, srcMember) => srcMember !=null);
                });

            CreateMap<SkillEntity, SkillDTO>();
        }
        
    }
}
