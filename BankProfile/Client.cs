using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestClientFunctions;

namespace BankProfile
{
    public class Client : IClientFunctionTester
    {
        IMakeConnections connections = new SqlServerConnections();
        IExecuteThings c2 = new SqlServerConnections();
        public async Task<bool> WithrawMoneyTest(Profile client)
        {
            float widthdrawAmount;
            string response;
            bool status = false;

            //Console.WriteLine("How much would you like to widthdraw?");
            //widthdrawAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point
            //Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            //client.AccountBalance -= widthdrawAmount;
            client.AccountBalance = client.AccountBalance + 5000;
            var c = connections.ConnectToDataBase();

            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber; //Retrieve password from row that matches Account Number match'
            await c2.Execute(sql, c);
            c.Close();

            return status == true;
        }

        Task IClientFunctionTester.WithrawMoneyTest(Profile client)
        {
            throw new NotImplementedException();
        }
    }
}
