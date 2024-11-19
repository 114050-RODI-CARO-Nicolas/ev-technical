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

            modelBuilder.Entity<SkillEntity>()
                .HasData(
                    new SkillEntity { Id = 1, Name = "C#" },
                    new SkillEntity { Id = 2, Name = "JavaScript" },
                    new SkillEntity { Id = 3, Name = "Python" },
                    new SkillEntity { Id = 4, Name = "SQL" }

                );
        }


    }
}
