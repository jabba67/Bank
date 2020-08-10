using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebAPI.Models
{
    public partial class BankContext : DbContext
    {
        public BankContext()
        {
        }

        public BankContext(DbContextOptions<BankContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer11111> Customer11111 { get; set; }
        public virtual DbSet<Customer24276> Customer24276 { get; set; }
        public virtual DbSet<Customer29490> Customer29490 { get; set; }
        public virtual DbSet<Customer33815> Customer33815 { get; set; }
        public virtual DbSet<Customer37048> Customer37048 { get; set; }
        public virtual DbSet<Customer41351> Customer41351 { get; set; }
        public virtual DbSet<Customer45505> Customer45505 { get; set; }
        public virtual DbSet<TransactionTracking> TransactionTracking { get; set; }
        public virtual DbSet<UserInformation> UserInformation { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("Server=165.227.58.156;Port=3306;Database=Bank;Uid=Tyler;Pwd=jabba6789;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer11111>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer24276>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer29490>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer33815>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer37048>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer41351>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer45505>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TransactionTracking>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("PRIMARY");

                entity.Property(e => e.AccountNumber)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .HasDefaultValueSql("CURRENT_TIMESTAMP")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.TransType)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Transaction)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.id).HasColumnType("int(11)");

            });

            modelBuilder.Entity<UserInformation>(entity =>
            {
                entity.HasKey(e => e.EmailAddress)
                    .HasName("PRIMARY");
                //entity.HasKey(e => e.AccountNumber)
                    //.HasName("PRIMARY");

                entity.Property(e => e.AccountBalance).HasColumnType("int(11)");

                entity.Property(e => e.Address)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Age).HasColumnType("int(11)");

                entity.Property(e => e.BirthDate)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsFixedLength();

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.SocialSecurityNumber)
                    .HasMaxLength(11)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
