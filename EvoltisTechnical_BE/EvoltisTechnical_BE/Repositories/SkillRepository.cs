using EvoltisTechnical_BE.Models.Entities;
using EvoltisTechnical_BE.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EvoltisTechnical_BE.Repositories
{
    public class SkillRepository : BaseRepository<SkillEntity>, ISkillRepository
    {
        public SkillRepository(DbContext context) : base(context)
        {
        }
    }
}
