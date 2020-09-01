using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebAPI.Controllers;
using WebAPI;
using MySqlX.XDevAPI.Common;
//using System.Net.Http;

namespace TestUIController
{
    [TestClass]
    public class UserInformationControllerTests
    {
        IUserInfoRepository repo; //Mock repo > objct
        UserInformationsController userInfoApi; //Class testing > object

        [TestInitialize]
        public void InitilaizeTest()
        {
            //repo = new MockRepository();
           // userInfoApi = new UserInformationsController(repo);
        }

        
        public async Task testUserControllerGetNotNull()
        {
            var Result = await userInfoApi.GetUserInformation();

            Assert.IsNotNull(Result);
        }

        
        public async Task testUserControllerGetUsers()
        {
            //var Result = (await userInfoApi.GetUserInformation()) as ObjectResult;

            //Assert.IsTrue((Result.Value as IEnumerable<UserInformation>).Count() > 0);
        }
    }
        /*private BankContext _context;

        [TestMethod]
        public async Task<ActionResult<IEnumerable<UserInformation>>> GetUserInformation()
        {
            //Setup PreReqs
            //var controller = new UserInformationsController(BankContext context);
            UserInformationsController result;
            result = Task.Run(UserInformationsController.GetUserInformation() as Task<ViewResult>);
            var viewResult = result.Result;
            var model = (List<UserInformation>)(viewResult.Model);

            Assert.IsNotNull(result);
        }

        [TestMethod]
        public async Task<ActionResult<IEnumerable<UserInformation>>> GetUserInformationn()
        {
            var controller = new UserInformationsController(_context);
            controller.Response = new HttpRequestMessage();

            var response = controller.GetUserInformation();
            return Assert.IsNotNull(response);

        }*/
    }
