﻿using EvoltisTechnical_BE.Models.Entities;

namespace EvoltisTechnical_BE.Repositories.Interfaces
{
    public interface IProgrammerRepository : IBaseRepository<ProgrammerEntity>
    {

        Task<ProgrammerEntity> GetByEmailAsync(string email);
        Task<ProgrammerEntity> GetWithSkillsAsync(int id);
        Task<ProgrammerEntity> UpdateWithSkillsAsync(int id, ProgrammerEntity entity, IEnumerable<int> skillIds );
    }
}
