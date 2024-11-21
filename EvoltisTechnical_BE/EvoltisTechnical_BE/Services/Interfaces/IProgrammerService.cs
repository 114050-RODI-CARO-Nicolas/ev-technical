using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Response;

namespace EvoltisTechnical_BE.Services.Interfaces
{
    public interface IProgrammerService
    {
        Task<IEnumerable<ProgrammerDTO>> GetAllAsync();
        Task<IEnumerable<ProgrammerDTO>> GetAllActiveAsync();
        Task<ProgrammerDetailDTO> GetByIdAsync(int id);
        Task<ProgrammerDetailDTO> GetByEmailAsync(string email);
        Task<ProgrammerDetailDTO> CreateAsync(CreateProgrammerDTO createDTO);
        Task<ProgrammerDetailDTO> UpdateAysnc(int id, UpdateProgrammerDTO updateDTO);

        Task DeleteAsync(int id);
        Task<ProgrammerDetailDTO> LogicalDeleteAsync(int id);

    }
}
