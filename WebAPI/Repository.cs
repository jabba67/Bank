using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI
{
    public class Repository : IUserInfoRepository
    {
        BankContext _context = new BankContext();
        public async Task<IEnumerable<UserInformation>> GetUserInformationAsync()
        {
            return await _context.UserInformation.ToListAsync();
        }

        public async Task PatchUserInformationAsync(string id, UserInformationDeposit userInformationDeposit)
        {
            var userInformation = await _context.UserInformation.FindAsync(id);
            if (id != userInformation.EmailAddress)
            {
                throw new ArgumentException();
            }

            var entity = await _context.UserInformation.SingleOrDefaultAsync(user => user.EmailAddress == userInformationDeposit.EmailAddress); //Why?
            if (entity.AccountBalance != userInformation.AccountBalance)
            {
                entity.AccountBalance = userInformation.AccountBalance;
                entity.CheckingAccountBalance = userInformation.CheckingAccountBalance;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInformationExists(id))
                {
                    throw new InvalidOperationException();
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task PostUserInformationAsync(UserInformation userInformation)
        {
            _context.UserInformation.Add(userInformation);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserInformationExists(userInformation.EmailAddress))
                {
                    throw new DbUpdateException();;
                }
                else
                {
                    throw;
                }
            }
        }


        private bool UserInformationExists(string id)
        {
            return _context.UserInformation.Any(e => e.EmailAddress == id);
        }
    }
}
