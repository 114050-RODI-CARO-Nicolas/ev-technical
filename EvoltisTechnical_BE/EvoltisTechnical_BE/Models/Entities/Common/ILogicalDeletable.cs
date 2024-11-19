namespace EvoltisTechnical_BE.Models.Entities.Common
{
    public interface ILogicalDeletable
    {
        bool IsActive { get; set; }
    }

}
