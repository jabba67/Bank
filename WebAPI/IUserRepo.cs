using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI
{ 
        public interface IUserInfoReposity
        {
           Task<IEnumerable<UserInformation>> GetUserInformationAsync();
        }
    
}
