using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPI;
using WebAPI.Models;

namespace TestUIController
{
    
    public class Repository : IUserInfoReposity
    {
        BankContext context = new BankContext();
        public async Task<IEnumerable<UserInformation>> GetUserInformationAsync()
        {
            return await context.UserInformation.ToListAsync();
        }
    }
}
