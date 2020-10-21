using BankProfile;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestClientFunctions
{
    [TestClass]
    public class ClientFunctionsTest
    {
        List<Profile> client;

        public ClientFunctionsTest()
        {
            client = new List<Profile>() {
            new Profile(){FirstName = "Tester" ,AccountBalance =10000, CheckingAccountBalance = 5000  , LastName = "Testy", Age = 25, BirthDate = "07/06/1992", SocialSecurityNumber = "123-56-7891", Address = "123 Avenue", PhoneNumber = "858-654-5455", Email = "Testertest@yahoo.com", AccountNumber = 54674, CheckingAccountNumber = 54642, Password = "12345678"},
            };
        }

        [TestMethod]
        public async Task WithrawMoneyTesterAsync()
        {
            float amount = 5000;
            Profile client = new Profile()
            {
                FirstName = "Tester",
                AccountBalance = 10000,
                CheckingAccountBalance = 5000,
                LastName = "Testy",
                Age = 25,
                BirthDate = "07/06/1992",
                SocialSecurityNumber = "123-56-7891",
                Address = "123 Avenue",
                PhoneNumber = "858-654-5455",
                Email = "Testertest@yahoo.com",
                AccountNumber = 54674,
                CheckingAccountNumber = 54642,
                Password = "12345678"
            };
            var mock = new Mock<IClientFunctionTester>();
            mock.Setup(p => p.WithrawMoneyTest(client));
            ClientFunction useThis = new ClientFunction(mock.Object);

            //Act
            var result =  await useThis.withrawMoney(client, amount);

            //Assert.IsNotNull(result);
            Assert.AreEqual(10, result);
            //change to check if an exception is returned if not we're good


            //Mock database object
            //Fix method to be testable (dont use readline)
        }
    }

    /*public interface IClientFunctionTester
    {
        //Task<IEnumerable<Profile>> WithrawMoneyTest();
        Task WithrawMoneyTest(Profile Client);
        //Task PostUserInformationAsync(UserInformation userinformation);
    }*/
}
