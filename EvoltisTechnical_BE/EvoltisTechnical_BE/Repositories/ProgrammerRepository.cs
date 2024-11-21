using EvoltisTechnical_BE.Data;
using EvoltisTechnical_BE.Models.Entities;
using EvoltisTechnical_BE.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EvoltisTechnical_BE.Repositories
{
    public class ProgrammerRepository : BaseRepository<ProgrammerEntity>, IProgrammerRepository
    {
        private readonly ApplicationDbContext _context;

        public ProgrammerRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;

        }


        public async Task<ProgrammerEntity> GetByEmailAsync(string email)
        {


            return await GetDbSet().FirstOrDefaultAsync(x => x.EmailAddress == email);
        }

        public async Task<ProgrammerEntity> GetWithSkillsAsync(int id)
        {
            return await GetDbSet().Include(p => p.Skills).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<ProgrammerEntity> UpdateWithSkillsAsync(int id, ProgrammerEntity entity, IEnumerable<int> skillIds)
        {
            
            var existingProgrammer = await GetDbSet()
                .Include(p => p.Skills)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (existingProgrammer == null)
            {
                throw new KeyNotFoundException($"Programmer with ID {id} not found");
            }

      
            existingProgrammer.FirstName = entity.FirstName;
            existingProgrammer.LastName = entity.LastName;
            existingProgrammer.PhoneNumber = entity.PhoneNumber;
            existingProgrammer.EmailAddress = entity.EmailAddress;
            existingProgrammer.LastUpdatedAt = DateTime.Now;
            existingProgrammer.IsActive = entity.IsActive;

            existingProgrammer.Skills.Clear();

           
            var skills = await _context.Set<SkillEntity>()
                .Where(s => skillIds.Contains(s.Id))
                .ToListAsync();

            
            foreach (var skill in skills)
            {
                existingProgrammer.Skills.Add(skill);
            }

            await _context.SaveChangesAsync();
            return existingProgrammer;
        }
    }
}
