using EvoltisTechnical_BE.Models.Entities.Common;
using EvoltisTechnical_BE.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EvoltisTechnical_BE.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private readonly DbContext _context;
        private readonly DbSet<T> _dbSet;

        public BaseRepository(DbContext context) 
        {
           _context = context;
            _dbSet = _context.Set<T>();
        }

        protected DbSet<T> GetDbSet()
        {
            return _dbSet;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<T> UpdateAsync(int id, T entity)
        {
            var foundEntity = await GetAsync(id);
            if (foundEntity == null)
            {
                throw new Exception("Entity to be updated could not be found");
            }

            _context.Entry(foundEntity).CurrentValues.SetValues(entity);
            await _context.SaveChangesAsync();
            return foundEntity;
        }

        public async Task DeleteAsync(int id)
        {
            var foundEntity = await GetAsync(id); 
            if( foundEntity == null)
            {
                throw new Exception("Entity to be deleted could not be found");
            }
            _dbSet.Remove(foundEntity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

     
    }
}
