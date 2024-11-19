namespace EvoltisTechnical_BE.Models.DTOs.Programmer.Request
{
    public class CreateProgrammerDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber {  get; set; }
        public string EmailAddress { get; set; }

        public List<int> SkillIds { get; set; }
    }
}
