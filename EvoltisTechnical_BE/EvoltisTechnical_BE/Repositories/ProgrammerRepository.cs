using EvoltisTechnical_BE.Data;
using EvoltisTechnical_BE.Models.Entities;
using EvoltisTechnical_BE.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EvoltisTechnical_BE.Repositories
{
    public class ProgrammerRepository : BaseRepository<ProgrammerEntity>, IProgrammerRepository
    {

        public ProgrammerRepository(DbContext context) : base(context)
        {

        }


        public async Task<ProgrammerEntity> GetByEmailAsync(string email)
        {


            return await GetDbSet().FirstOrDefaultAsync(x => x.EmailAddress == email);
        }
    }
}
