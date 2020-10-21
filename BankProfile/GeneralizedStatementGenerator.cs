using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace BankProfile
{
    public class GeneralizedStatementGenerator : IgenerateMonthlyStatement //mask abstract and continue
    {
        public void printAccountStatement(Profile client)
        {
            Console.WriteLine("We have gained the interface!");
            Console.WriteLine("Current Balance Amount for for the following accounts: General Account Balance: " + client.AccountBalance + " Checking Account Balance: " + client.CheckingAccountBalance + '\n' + '\n' + "Which Account Would you like to generate a statement for?");
            //Use transactions to get totals and add them all up
        }
    }

    public interface IgenerateMonthlyStatement
    {
        void printAccountStatement(Profile client);
    }

    public abstract class StatementGeneration : ClientFunction
    {
        public abstract void GenerateStatement(Profile Client, int response);
    }
}
