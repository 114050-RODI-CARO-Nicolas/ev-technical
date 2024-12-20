﻿using AutoMapper;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Response;
using EvoltisTechnical_BE.Models.Entities;
using EvoltisTechnical_BE.Repositories.Interfaces;
using EvoltisTechnical_BE.Services.Interfaces;

namespace EvoltisTechnical_BE.Services
{
    public class ProgrammerService : IProgrammerService
    {
        private readonly IProgrammerRepository _programmerRepository;
        private readonly ISkillRepository _skillRepository;
        private readonly IMapper _mapper;

        public ProgrammerService(IProgrammerRepository programmerRepository, ISkillRepository skillRepository, IMapper mapper)
        {
            _programmerRepository=programmerRepository;
            _skillRepository=skillRepository;
            _mapper=mapper;
        }

        public async Task<IEnumerable<ProgrammerDTO>> GetAllAsync()
        {
            var programmers = await _programmerRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<ProgrammerDTO>>(programmers);
        }


        public async Task<IEnumerable<ProgrammerDTO>> GetAllActiveAsync()
        {
            var activeProgrammers = await _programmerRepository.GetAllActiveAsync();
            return _mapper.Map<IEnumerable<ProgrammerDTO>>(activeProgrammers);
        }

        public async Task<ProgrammerDetailDTO> CreateAsync(CreateProgrammerDTO createDTO)
        {
            var existingProgrammer = await _programmerRepository.GetByEmailAsync(createDTO.EmailAddress);
            if (existingProgrammer != null)
            
                throw new InvalidOperationException($"Programmer with email {createDTO.EmailAddress} already exists.");

            if (createDTO.SkillIds?.Any()==true)
            {
                foreach(var skillId in createDTO.SkillIds)
                {
                    var skill = await _skillRepository.GetAsync(skillId);
                    if (skill == null)
                        throw new KeyNotFoundException($"Skill with ID {skillId} not found. ");
                }
            }

            var programmerEntity = _mapper.Map<ProgrammerEntity>(createDTO);
           
            if(createDTO.SkillIds?.Any() == true)
            {
                foreach (var skillId in createDTO.SkillIds)
                {
                    var skill = await _skillRepository.GetAsync(skillId);
                    programmerEntity.Skills.Add(skill);
                }
            }

            var createdProgrammer = await _programmerRepository.AddAsync(programmerEntity);
            return _mapper.Map<ProgrammerDetailDTO>(createdProgrammer);
            
        }

        public async Task DeleteAsync(int id)
        {
            var programmer = await _programmerRepository.GetAsync(id);
            if (programmer == null)
                throw new KeyNotFoundException($"Programmer with ID {id} not found");

            await _programmerRepository.DeleteAsync(id);
        }

        public async Task<ProgrammerDetailDTO> LogicalDeleteAsync(int id)
        {
            var programmer = await _programmerRepository.GetAsync(id);
            if (programmer == null)
                throw new KeyNotFoundException($"Programmer with ID {id} not found");

            var deletedProgrammer = await _programmerRepository.LogicalDeleteAsync(id);
            return _mapper.Map<ProgrammerDetailDTO>(deletedProgrammer);
        }


        public async Task<ProgrammerDetailDTO> GetByEmailAsync(string email)
        {
            var programmer = await _programmerRepository.GetByEmailAsync(email);
            if (programmer == null)
                throw new KeyNotFoundException($"Programmer with email {email} not found.");
            return _mapper.Map<ProgrammerDetailDTO>(programmer);
        }

        public async Task<ProgrammerDetailDTO> GetByIdAsync(int id)
        {
            var programmer = await _programmerRepository.GetWithSkillsAsync(id);
            if (programmer == null)
                throw new KeyNotFoundException($"Programmer with ID {id} not found.");
            return _mapper.Map<ProgrammerDetailDTO>(programmer);
        }

        public async Task<ProgrammerDetailDTO> UpdateAysnc(int id, UpdateProgrammerDTO updateDTO)
        {
            var existingProgrammer = await _programmerRepository.GetWithSkillsAsync(id);
            if (existingProgrammer == null)
                throw new KeyNotFoundException($"Programmer to be updated with ID {id} not found");

            if (!string.IsNullOrEmpty(updateDTO.EmailAddress) &&
                updateDTO.EmailAddress != existingProgrammer.EmailAddress)
            {
                var programmerWithEmail = await _programmerRepository.GetByEmailAsync(updateDTO.EmailAddress);
                if (programmerWithEmail != null)
                    throw new InvalidOperationException($"Email {updateDTO.EmailAddress} is already in use");
            }

           
            if (!string.IsNullOrEmpty(updateDTO.FirstName))
                existingProgrammer.FirstName = updateDTO.FirstName;
            if (!string.IsNullOrEmpty(updateDTO.LastName))
                existingProgrammer.LastName = updateDTO.LastName;
            if (!string.IsNullOrEmpty(updateDTO.PhoneNumber))
                existingProgrammer.PhoneNumber = updateDTO.PhoneNumber;
            if (!string.IsNullOrEmpty(updateDTO.EmailAddress))
                existingProgrammer.EmailAddress = updateDTO.EmailAddress;

            if (updateDTO.SkillIds != null)
            {
               
                foreach (var skillId in updateDTO.SkillIds)
                {
                    var skill = await _skillRepository.GetAsync(skillId);
                    if (skill == null)
                        throw new KeyNotFoundException($"Skill with ID {skillId} not found");
                }

               
                var updatedProgrammer = await _programmerRepository.UpdateWithSkillsAsync(
                    id,
                    existingProgrammer,
                    updateDTO.SkillIds);

                return _mapper.Map<ProgrammerDetailDTO>(updatedProgrammer);
            }
            else
            {
                
                var updatedProgrammer = await _programmerRepository.UpdateAsync(id, existingProgrammer);
                return _mapper.Map<ProgrammerDetailDTO>(updatedProgrammer);
            }
        }



    }
}
