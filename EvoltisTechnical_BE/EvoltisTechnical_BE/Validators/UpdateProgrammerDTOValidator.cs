using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using FluentValidation;

namespace EvoltisTechnical_BE.Validators
{
    public class UpdateProgrammerDTOValidator : AbstractValidator<UpdateProgrammerDTO>
    {
        public UpdateProgrammerDTOValidator()
        {
            RuleFor(x => x.FirstName)
           .Length(2, 50).WithMessage("El nombre debe tener entre 2 y 50 caracteres")
           .When(x => !string.IsNullOrEmpty(x.FirstName));

            RuleFor(x => x.LastName)
                .Length(2, 50).WithMessage("El apellido debe tener entre 2 y 50 caracteres")
                .When(x => !string.IsNullOrEmpty(x.LastName));

            RuleFor(x => x.PhoneNumber)
                .Matches(@"^\+?[1-9]\d{1,14}$").WithMessage("Formato de teléfono inválido")
                .When(x => !string.IsNullOrEmpty(x.PhoneNumber));

            RuleFor(x => x.EmailAddress)
                .EmailAddress().WithMessage("Formato de email inválido")
                .When(x => !string.IsNullOrEmpty(x.EmailAddress));

            RuleFor(x => x.SkillIds)
                .Must(x => x == null || x.Any()).WithMessage("La lista de habilidades no puede estar vacía")
                .ForEach(id => id.GreaterThan(0)).WithMessage("Los IDs de habilidades deben ser mayores a 0")
                .When(x => x.SkillIds != null);
        }
    }
}
