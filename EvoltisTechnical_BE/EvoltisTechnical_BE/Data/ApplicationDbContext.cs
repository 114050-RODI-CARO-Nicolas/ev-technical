using EvoltisTechnical_BE.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EvoltisTechnical_BE.Data
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<ProgrammerEntity> Programmers { get; set; }
        public DbSet<SkillEntity> Skills { get; set; }

        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProgrammerEntity>()
                .HasMany(p => p.Skills)
                .WithMany()
                .UsingEntity(j => j.ToTable("ProgrammerSkills"));
        }


    }
}
