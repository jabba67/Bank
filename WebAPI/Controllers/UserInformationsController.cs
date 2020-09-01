using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc.Abstractions;

namespace WebAPI.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class UserInformationsController : ControllerBase
    {
        //private readonly BankContext _context;
        private BankContext _context;
        private IUserInfoRepository _repo;

        public UserInformationsController(IUserInfoRepository repo)
        {
            _repo = repo;
        }

        /*public UserInformationsController(BankContext context)
        {
            _context = context;
        }*/


        // GET: api/UserInformations
        [HttpGet]
        public async Task<IActionResult> GetUserInformation()
        //public async Task<ActionResult<IEnumerable<UserInformation>>> GetUserInformation()
        {
            return Ok(await _repo.GetUserInformationAsync());
            //return await _context.UserInformation.ToListAsync();
        }

        // GET: api/UserInformations/5
        
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInformation>> GetUserInformation(string id)
        {
            var userInformation = await _context.UserInformation.FindAsync(id);

            if (userInformation == null)
            {
                return NotFound();
            }

            return userInformation;
        }
        /*
        //Make a get for account number/other info based on email, use existing class to get balance/account number
        [HttpGet("{EmailAddress}")]
        public async Task<ActionResult<UserInformationDeposit>> GetAccountNumberFromEmail(string EmailAddress)
        {
            var userInformation = await _context.UserInformation.FindAsync(EmailAddress);

            if (userInformation == null)
            {
                return NotFound();
            }

            //return userInformation;
            return NoContent();
        }*/

        // PUT: api/UserInformations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserInformation(string id, UserInformation userInformation)
        {
            if (id != userInformation.EmailAddress)
            {
                return BadRequest();
            }

            _context.Entry(userInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserInformations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}")]
        public async Task<IActionResult> PostUserInformation(string id, UserInformation userInformation)
        {
            if (id != userInformation.EmailAddress)
            {
                return BadRequest();
            }

            _context.Entry(userInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // Patch: api/UserInformations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPatch("{id}")]
        //public async Task<IActionResult> PatchUserInformation(string id, UserInformationDeposit userInformation)
        public async Task<IActionResult> PatchUserInformation(string id, UserInformationDeposit userInformationDeposit)
        {
            try
            {
                await _repo.PatchUserInformationAsync(id, userInformationDeposit);
            }
            catch(ArgumentException)
            {
                return BadRequest();
            }
            catch (InvalidOperationException)
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/UserInformations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> PostUserInformation(UserInformation userInformation)
        {
            //_context.UserInformation.Add(userInformation);
            try
            {
                await _repo.PostUserInformationAsync(userInformation);
            }
            catch (DbUpdateException)
            {
                return Conflict();
                /*if (UserInformationExists(userInformation.EmailAddress))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }*/
            }

            return CreatedAtAction("GetUserInformation", new { id = userInformation.AccountNumber }, userInformation);
        }

        // DELETE: api/UserInformations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserInformation>> DeleteUserInformation(string id)
        {
            var userInformation = await _context.UserInformation.FindAsync(id);
            if (userInformation == null)
            {
                return NotFound();
            }

            _context.UserInformation.Remove(userInformation);
            await _context.SaveChangesAsync();

            return userInformation;
        }

        private bool UserInformationExists(string id)
        {
            return _context.UserInformation.Any(e => e.EmailAddress == id);
        }
    }
}
