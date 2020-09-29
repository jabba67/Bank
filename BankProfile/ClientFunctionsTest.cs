using BankProfile;
//using Microsoft.VisualStudio.TestTools.UnitTesting;
//using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestClientFunctions
{

    public interface IClientFunctionTester
    {
        //Task<IEnumerable<Profile>> WithrawMoneyTest();
        Task WithrawMoneyTest(Profile client);// Profile Client);
        //Task PostUserInformationAsync(UserInformation userinformation);
    }
}
