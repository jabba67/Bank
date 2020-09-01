using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebAPI;
using WebAPI.Controllers;
using WebAPI.Models;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using MySqlX.XDevAPI.Common;

namespace TestUIController
{
    [TestClass]
    public class MoqTest
    {
        List<UserInformation> userInfoRepo;

        public MoqTest()
        {
            userInfoRepo = new List<UserInformation>() {
            new UserInformation(){FirstName = "Tester" ,AccountBalance =10000 , LastName = "Testy", Age = 25, BirthDate = "07/06/1992", SocialSecurityNumber = "123-56-7891", Address = "123 Avenue", PhoneNumber = "858-654-5455", EmailAddress = "Testertest@yahoo.com", AccountNumber = 54674, Password = "12345678"},
            };
        }

        [TestMethod]
        public async Task GetUserInformationShouldReturnResults()
        {
            //Arrange
            var mock = new Mock<IUserInfoRepository>();
            mock.Setup(p => p.GetUserInformationAsync()).ReturnsAsync(new List<UserInformation>());
            UserInformationsController userable = new UserInformationsController(mock.Object);

            //Act
            var result = await userable.GetUserInformation();

            //Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public async Task PatchUserInformationShouldPatch()
        {
            string id = "";
            UserInformationDeposit userInformationDeposit = new UserInformationDeposit();
            //Arrange
            var mock = new Mock<IUserInfoRepository>();
            mock.Setup(p => p.GetUserInformationAsync()).ReturnsAsync(new List<UserInformation>());
            UserInformationsController userable = new UserInformationsController(mock.Object);

            //Act
            var result = (await userable.PatchUserInformation(id, userInformationDeposit)) as NoContentResult;

            //Assert
            Assert.AreEqual(204, result.StatusCode);
        }

        [TestMethod]
        public async Task PatchUserInformationShouldPatch2()
        {
            string id = "";
            UserInformationDeposit userInformationDeposit = new UserInformationDeposit() { EmailAddress ="foo" };
            //Arrange
            var mock2 = new Mock<IUserInfoRepository>();

            mock2.Setup(p => p.PatchUserInformationAsync(id, userInformationDeposit)).ThrowsAsync(new ArgumentException());

            UserInformationsController userable = new UserInformationsController(mock2.Object);

            //Act
            var result = (await userable.PatchUserInformation(id, userInformationDeposit)) as BadRequestResult;

            //Assert
            Assert.AreEqual(400, result.StatusCode);
        }

        [TestMethod]
        public async Task PatchUserInformationShouldPatch3()
        {
            string id = "";
            UserInformationDeposit userInformationDeposit = new UserInformationDeposit() { EmailAddress = "arcowirexzs@gmail.com" };
            //Arrange
            var mock3 = new Mock<IUserInfoRepository>();

            mock3.Setup(p => p.PatchUserInformationAsync(id, userInformationDeposit)).ThrowsAsync(new InvalidOperationException());

            UserInformationsController userable = new UserInformationsController(mock3.Object);

            //Act
            var result = (await userable.PatchUserInformation(id, userInformationDeposit)) as NotFoundResult;

            //Assert
            Assert.AreEqual(404, result.StatusCode);
        }

        [TestMethod]
        public async Task PostUserInformationShouldPatch()
        {
            UserInformation userInformation = new UserInformation() { EmailAddress = "foo" };
            //userInformation.EmailAddress = "foo";
            //Arrange
            var mock = new Mock<IUserInfoRepository>();

            mock.Setup(p => p.PostUserInformationAsync(userInformation)).ThrowsAsync(new DbUpdateException());

            UserInformationsController userable = new UserInformationsController(mock.Object);

            //Act
            var result = (await userable.PostUserInformation(userInformation)) as ConflictResult;

            //Assert
            Assert.AreEqual(409, result.StatusCode);
        }


    }
}
