using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using EvoltisTechnical_BE.Models.DTOs.Programmer.Response;
using EvoltisTechnical_BE.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EvoltisTechnical_BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecruitingController : ControllerBase
    {
        private readonly IProgrammerService _programmerService;
        private readonly ILogger<RecruitingController> _logger;

        public RecruitingController(IProgrammerService programmerService, ILogger<RecruitingController> logger)
        {
            _programmerService=programmerService;
            _logger=logger;
        }

        /// <summary>
        /// Gets all programmers, including inactive ones.
        /// </summary>

        [HttpGet("programmers")]
        public async Task<ActionResult<IEnumerable<ProgrammerDTO>>> GetAllProgrammers()
        {
            var programmers = await _programmerService.GetAllAsync();
            return Ok(programmers);

        }


        /// <summary>
        /// Gets the programmer by id, without regard to its isActive status
        /// </summary>
        /// <param name="id"></param>

        [HttpGet("programmers/{id}")]
        public async Task<ActionResult<ProgrammerDetailDTO>> GetProgrammerById(int id)
        {
            try
            {
                var programmer = await _programmerService.GetByIdAsync(id);
                return Ok(programmer);

            }
            catch (KeyNotFoundException ex)
            {

                return NotFound(new {message = ex.Message});
            }

        }
        /// <summary>
        /// Retrieves a programmer by email.
        /// </summary>
        /// <param name="email"></param>
        [HttpGet("programmers/by-email/{email}")]
        public async Task<ActionResult<ProgrammerDetailDTO>> GetProgrammerByEmail(string email)
        {
            try
            {
                var programmer = await _programmerService.GetByEmailAsync(email);
                return Ok(programmer);

            }
            catch (KeyNotFoundException ex)
            {

                return NotFound(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Creates a new programmer.
        /// </summary>
        /// <param name="createDTO"></param>

        [HttpPost]
        public async Task<ActionResult<ProgrammerDetailDTO>> CreateProgrammer([FromBody] CreateProgrammerDTO createDTO)
        {
            try
            {
                var programmer = await _programmerService.CreateAsync(createDTO);
                return CreatedAtAction(
                    nameof(GetProgrammerById),
                    new { id = programmer.Id },
                    programmer
                    );
            }
            catch (InvalidOperationException ex)
            {

                return BadRequest(new { message = ex.Message });
            }
            catch (KeyNotFoundException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        /// <summary>
        /// Updates a programmer by id.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="updateDTO"></param>

        [HttpPut("{id}")]
        public async Task<ActionResult<ProgrammerDetailDTO>> UpdateProgrammer(int id, [FromBody] UpdateProgrammerDTO updateDTO )
        {
            try
            {
                var programmer = await _programmerService.UpdateAysnc(id, updateDTO);
                return Ok(programmer); 

            }
            catch (KeyNotFoundException ex)
            {

                return NotFound(new { message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        /// <summary>
        /// Logically deletes a programmer from the system.
        /// </summary>
        /// <param name="id"></param>
 

        [HttpDelete("programmers/delete/${id}")]
        public async Task<ActionResult<ProgrammerDetailDTO>> DeleteProgrammer(int id)
        {
            try
            {
                var deletedProgrammer = await _programmerService.LogicalDeleteAsync(id);
                return Ok(deletedProgrammer);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }





    }
}
