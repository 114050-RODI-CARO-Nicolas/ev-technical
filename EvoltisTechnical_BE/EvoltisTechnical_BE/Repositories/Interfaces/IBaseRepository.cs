using EvoltisTechnical_BE.Models.Entities.Common;

namespace EvoltisTechnical_BE.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {

        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetAsync(int id);




        Task<T> AddAsync(T entity);

        Task<T> UpdateAsync(int id, T entity);

        Task DeleteAsync(int id);

    }
}
