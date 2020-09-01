using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebAPI;
using WebAPI.Models;

namespace TestUIController
{
    //public class MockRepository : IUserInfoRepository
    //{
    //    List<UserInformation> userInfo;

    //    public bool FailGet { get; set; }

    //    public MockRepository()
    //    {
    //        userInfo = new List<UserInformation>() {
    //        new UserInformation(){FirstName = "Tester" ,AccountBalance =10000 , LastName = "Testy", Age = 25, BirthDate = "07/06/1992", SocialSecurityNumber = "123-56-7891", Address = "123 Avenue", PhoneNumber = "858-654-5455", EmailAddress = "Testertest@yahoo.com", AccountNumber = 54674, Password = "12345678"},
    //        };
    //    }

    //    public async Task<IEnumerable<UserInformation>> GetUserInformationAsync()
    //    {
    //        if (FailGet)
    //        {
    //            throw new InvalidOperationException();
    //        }
    //        await Task.Delay(1000);
    //        return userInfo;
    //    }

    //    public Task<IEnumerable<BankContext>> GetAllContactsAsync()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    Task<IEnumerable<UserInformation>> IUserInfoRepository.GetUserInformationAsync()
    //    {
    //        return Task.FromResult(userInfo as IEnumerable<UserInformation>);
    //        //throw new NotImplementedException();
    //    }
    //}
}
