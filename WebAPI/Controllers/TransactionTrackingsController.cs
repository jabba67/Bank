using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using Microsoft.AspNetCore.Cors;
using System.Text;
using System.IO;
using System.Data;
//using MySql.Data;
using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Cms;
//using Pomelo.EntityFrameworkCore.MySql;
//using MySql.Data.MySqlClient.MySqlConnection;


namespace WebAPI.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionTrackingsController : ControllerBase
    {
        private readonly BankContext _context;

        public TransactionTrackingsController(BankContext context)
        {
            _context = context;
        }

        // GET: api/TransactionTrackings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TransactionTracking>>> GetTransactionTracking()
        {
            return await _context.TransactionTracking.ToListAsync();
        }

        /*// GET: api/TransactionTrackings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TransactionTracking>> GetTransactionTracking(int id)
        {
            var transactionTracking = await _context.TransactionTracking.FindAsync(id);

            if (transactionTracking == null)
            {
                return NotFound();
            }

            return transactionTracking;
        }*/

        // GET: api/TransactionTrackings/ACCOUNTNUMBER
        [HttpGet("{AccountNumber}")]
        public List<string> GetTransactionTrackingAccountHistory(double AccountNumber)
        {
            string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";

            MySqlConnection conn = new MySqlConnection(ConnectionString);
            conn.Open();
            string sql = "select * from TransactionTracking where AccountNumber = " + AccountNumber;
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            List<string> TransHistory = new List<string>();
            int count = 1;
            while (rdr.Read())
            {
                TransHistory.Add("<===== " + count + " =====>");
                TransHistory.Add("Amount: " + rdr["Transaction"].ToString() + "\n"); //Read by column
                TransHistory.Add("Time: "+ rdr["Time"].ToString() + "\n"); //Read by column
                TransHistory.Add("Transaction Type: " + rdr["TransType"].ToString()); //Read by column
                TransHistory.Add("\n");
                count++;
            }
            rdr.Close();
            conn.Close();

            return TransHistory;
        }

        // PUT: api/TransactionTrackings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransactionTracking(int id, TransactionTracking transactionTracking)
        {
            if (id != transactionTracking.id)
            {
                return BadRequest();
            }

            _context.Entry(transactionTracking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionTrackingExists(id))
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

        // POST: api/TransactionTrackings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TransactionTracking>> PostTransactionTracking(TransactionTracking transactionTracking)
        {
            _context.TransactionTracking.Add(transactionTracking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransactionTracking", new { id = transactionTracking.id }, transactionTracking);
        }

        // DELETE: api/TransactionTrackings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TransactionTracking>> DeleteTransactionTracking(int id)
        {
            var transactionTracking = await _context.TransactionTracking.FindAsync(id);
            if (transactionTracking == null)
            {
                return NotFound();
            }

            _context.TransactionTracking.Remove(transactionTracking);
            await _context.SaveChangesAsync();

            return transactionTracking;
        }

        private bool TransactionTrackingExists(int id)
        {
            return _context.TransactionTracking.Any(e => e.id == id);
        }
    }
}
