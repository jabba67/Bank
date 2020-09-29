
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;
using TestClientFunctions;
//using TestClientFunctions;

namespace BankProfile
{

    public class GenerateGeneralAccountStatement : StatementGeneration
    {
        public override void GenerateStatement(Profile Client, int response)
        {
            Console.WriteLine("I generate general account statements here: " + '\n' + '\n');
            ViewTransactions(Client, response);
            mainMenu(Client);
        }
    }

    public class GenerateCheckingAccountStatement : StatementGeneration
    {
        public override void GenerateStatement(Profile Client, int response)
        {
            Console.WriteLine("I generate checking account statements here:" + '\n');
            ViewTransactions(Client, response);
            mainMenu(Client);
        }
    }

    public class ClientFunction : Session
    {
        IMakeConnections connections = new SqlServerConnections();
        IExecuteThings c2 = new SqlServerConnections();
        private IClientFunctionTester @object;

        public ClientFunction(IClientFunctionTester @object)
        {
            this.@object = @object;
        }

        public ClientFunction()
        {
        }

        public async Task depositMoney(Profile client)
        {
            float depositAmount;
            Console.WriteLine("Your account balance is " + client.AccountBalance);
            Console.WriteLine("The current account number is " + client.AccountNumber);
            Console.WriteLine("How much would you like to deposit?");
            depositAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point make the user enter the correct data type and input or reject and ask again
            client.AccountBalance += depositAmount;
            Console.WriteLine("Your account balance is now: {0}", client.AccountBalance);
            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber ; //Retrieve password from row that matches Account Number match
            var c = connections.ConnectToDataBase();
            await c2.Execute(sql, c);

            //SQL Statement to update transaction table with amount, time, and account number
            string sql2 = "insert into TransactionTracking(Transaction, TransType, Time, AccountNumber) Values(" + depositAmount + ", 'Deposit'" +  ", current_timestamp," + client.AccountNumber + ")";
            await c2.Execute(sql2, c);
            c.Close();
            mainMenu(client);
            }
     
        public async Task<bool> withrawMoney(Profile client)
        {
            float widthdrawAmount;
            string response;
            bool status = false;
            bool status2 = true;

            Console.WriteLine("How much would you like to widthdraw?");
            widthdrawAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            client.AccountBalance -= widthdrawAmount;

            var c = connections.ConnectToDataBase();

            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber; //Retrieve password from row that matches Account Number match'
            await c2.Execute(sql, c);
            c.Close();

            Console.WriteLine("Would you like to know your current balance?");
            response = Console.ReadLine();
            if (response == "yes")
            {
                displayBalance(client);
                mainMenu(client);
                status = true;
                return Equals(status, status2);
            }
            else
            {
                mainMenu(client);
                return status == true;
            }
        }
        public void ViewTransactions(Profile client, int response)
        {
            var conn = connections.ConnectToDataBase();
            int responsefromMenu = response;
            string sql = "";
            
            if (responsefromMenu == 1)
            {
                sql = "select * from TransactionTracking where AccountNumber = " + client.AccountNumber;
            }
            if (responsefromMenu == 2)
            {
                sql = "select * from TransactionTracking where AccountNumber = " + client.CheckingAccountNumber; 
            }

            MySqlCommand cmd = new MySqlCommand(sql, conn as MySqlConnection);
                MySqlDataReader rdr = cmd.ExecuteReader();
            int totalMoney = 0;
            int totalMoneyTemp = 0;
            int transactions = 0;

            while (rdr.Read())
                {
                    Console.WriteLine("Transaction Amount:");
                    Console.WriteLine(rdr["Transaction"]); //Read by column
                    //totalMoneyTemp = int.Parse(rdr.GetString(0));
                    //totalMoney += totalMoneyTemp;
                    //transactions++;
                    Console.WriteLine("Transaction Type:");
                    Console.WriteLine(rdr["TransType"]); //Read by column
                    Console.WriteLine("Transaction Time:");
                    Console.WriteLine(rdr["Time"]); //Read by column
                    Console.WriteLine("Account Number:");
                    Console.WriteLine(rdr["AccountNumber"]); //Read by column
                    Console.WriteLine("\n" + "\n");
                    
                }
            /*for(int i = 1; i < 14; i++)
            {
                totalMoney += int.Parse(rdr.GetString(0));
                transactions++;
                rdr.NextResult();
            }*/

            rdr.Close();
            conn.Close();
            Console.WriteLine("Total Amount of Money Moved Is: " + totalMoney + " For " + transactions + " Amount of Transactions");
            mainMenu(client);
        }

        public void CallTransform(Profile client)
        {
            double AccountBalanceInitial = client.AccountBalance * 0;
            MultipleAsync Test = new MultipleAsync();
            Test.TestingAsyncMethods(AccountBalanceInitial);
            mainMenu(client);
        }

        public void displayBalance(Profile client)
        {
            Console.WriteLine("Your current account balance is {0}", client.AccountBalance);
            Console.WriteLine("Account Number: " + client.AccountNumber + '\n' + "Checking Account Number: " + client.CheckingAccountNumber);
            mainMenu(client);
        }

        public void calculateInterest(Profile client)
        {
            //Give_Interest example = new Calculate_Interest(); This was a interface learning example
            //example.ThisAbstractFunction(client);
            float savingsInterestRate = 0.3f;
            int months;
            float currentBalance = client.AccountBalance;
            Console.WriteLine("Hi, {0} how many months ahead do you want to calculate?", client.FirstName);
            months = int.Parse(Console.ReadLine());
            for (int i = 0; i < months; i++)
            {
                currentBalance = (currentBalance * savingsInterestRate) + currentBalance;
            }
            Console.WriteLine("In {0} months you will have {1} in your account", months, currentBalance);
            mainMenu(client);
        }

        public async Task printAccountStatementAsync(Profile client)
        {
            var c = connections.ConnectToDataBase();
            string sql = "select * from TransactionTracking where AccountNumber=" + client.AccountNumber;
            await c2.Execute(sql, c);
            Console.WriteLine(c2);
            c.Close();
            mainMenu(client);
        }

        public void exitSession(Profile client)
        {
            Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", client.FirstName);
        }

        public void mainMenu(Profile client)
        {
            StatementGeneration generalAccountStatement = new GenerateGeneralAccountStatement();
            StatementGeneration checkingAccountStatement = new GenerateCheckingAccountStatement();
            int response = 0;
            int choice;
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: View Transactions | 5: Calulate Interest | '\n' 6: Call Transform | 7: Exit Session/Return Card | 8: Generate Statements");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    depositMoney(client);
                    break;

                case 2:
                    withrawMoney(client);
                    break;

                case 3:
                    displayBalance(client);
                    break;

                case 4:
                    ViewTransactions(client, response);
                    break;

                case 5:
                    calculateInterest(client);
                    break;

                case 6:
                    CallTransform(client);
                    break;

                case 7:
                    exitSession(client);
                    break;

                case 8:
                    Console.WriteLine("Please choose 1 for a General Account Statement or 2 for Checking Account Statement");
                    response = int.Parse(Console.ReadLine());
                    if(response == 1)
                    {
                        generalAccountStatement.GenerateStatement(client, response);
                    }
                    else if(response == 2)
                    {
                        checkingAccountStatement.GenerateStatement(client, response);
                    }
                    break;

            }
        }

    }
}

