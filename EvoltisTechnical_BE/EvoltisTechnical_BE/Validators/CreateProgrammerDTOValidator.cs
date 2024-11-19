using EvoltisTechnical_BE.Models.DTOs.Programmer.Request;
using FluentValidation;

namespace EvoltisTechnical_BE.Validators
{
    public class CreateProgrammerDTOValidator : AbstractValidator<CreateProgrammerDTO>
    {
        public CreateProgrammerDTOValidator()
        {

            RuleFor(x => x.FirstName)
                 .NotEmpty().WithMessage("El nombre es requerido")
                 .Length(2, 50).WithMessage("El nombre debe tener entre 2 y 50 caracteres");
            RuleFor(x => x.LastName)
                .NotEmpty().WithMessage("El apellido es requerido")
                 .Length(2, 50).WithMessage("El apellido debe tener entre 2 y 50 caracteres");
            RuleFor(x => x.PhoneNumber)
            .NotEmpty().WithMessage("El número de teléfono es requerido")
            .Matches(@"^\+?[1-9]\d{1,14}$").WithMessage("Formato de teléfono inválido");

            RuleFor(x => x.EmailAddress)
                .NotEmpty().WithMessage("El email es requerido")
                .EmailAddress().WithMessage("Formato de email inválido");

            RuleFor(x => x.SkillIds)
                .NotNull().WithMessage("La lista de habilidades es requerida")
                .Must(x => x != null && x.Any()).WithMessage("Debe seleccionar al menos una habilidad")
                .ForEach(id => id.GreaterThan(0)).WithMessage("Los IDs de habilidades deben ser mayores a 0");



        }
    }
}
