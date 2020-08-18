
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace BankProfile
{
    public class ClientFunction
    {
        IMakeConnections connections = new SqlServerConnections();
        IExecuteThings c2 = new SqlServerConnections();

        public async Task depositMoney(Profile client)
        {
            float depositAmount;
            Console.WriteLine("Your account balance is " + client.AccountBalance);
            Console.WriteLine("The current account number is " + client.AccountNumber);
            Console.WriteLine("How much would you like to deposit?");
            depositAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point
            client.AccountBalance += depositAmount;
            Console.WriteLine("Your account balance is now: {0}", client.AccountBalance);
            //Build sql statement to log deposit into history table
            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber ; //Retrieve password from row that matches Account Number match

            var c = connections.ConnectToDataBase();

            await c2.Execute(sql, c);

            //SQL Statement to update transaction table with amount, time, and account number
            //string sql2 = "insert into TransactionTrackings set Transaction = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber; //Retrieve password from row that matches Account Number match
            string sql2 = "insert into TransactionTracking(Transaction, TransType, Time, AccountNumber) Values(" + depositAmount + ", 'Deposit'" +  ", current_timestamp," + client.AccountNumber + ")";

            await c2.Execute(sql2, c);

            c.Close();

            mainMenu(client);
            }
     
        public async Task withrawMoney(Profile client)
        {
            float widthdrawAmount;
            string response;

            Console.WriteLine("How much would you like to widthdraw?");
            widthdrawAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            client.AccountBalance -= widthdrawAmount;

            var c = connections.ConnectToDataBase();

            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber; //Retrieve password from row that matches Account Number match'

            await c2.Execute(sql, c);

            c.Close();

            //SQL Statement to update transaction table with amount, time, and account number
            //string sql2 = "insert into TransactionTracking(Transaction, TransType, Time, AccountNumber) Values(" + (-1* widthdrawAmount) + ", 'Withdrawal'" + ", current_timestamp," + client.AccountNumber + ")";
            //connection.ConnectToDataBase(sql2, client);

            Console.WriteLine("Would you like to know your current balance?");
            response = Console.ReadLine();
            if (response == "yes")
            {
                displayBalance(client);
                mainMenu(client);
            }
            else
            {
                mainMenu(client);
            }
        }
        public void ViewTransactions(Profile client)
        {
            var conn = connections.ConnectToDataBase();

                Console.WriteLine("Connecting to MySQL...");
            conn.Open();
                //string sql = "use Bank;" + "\n" + "select * from UserInformation" + "\n" + "go";
                string sql = "select * from TransactionTracking where AccountNumber = " + client.AccountNumber;
                MySqlCommand cmd = new MySqlCommand(sql, conn as MySqlConnection);
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Console.WriteLine("Transaction Amount:");
                    Console.WriteLine(rdr["Transaction"]); //Read by column
                    Console.WriteLine("Transaction Type:");
                    Console.WriteLine(rdr["TransType"]); //Read by column
                    Console.WriteLine("Transaction Time:");
                    Console.WriteLine(rdr["Time"]); //Read by column
                    Console.WriteLine("Account Number:");
                    Console.WriteLine(rdr["AccountNumber"]); //Read by column
                    Console.WriteLine("\n" + "\n");
                }
                rdr.Close();
            conn.Close();
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
            mainMenu(client);
        }

        public void calculateInterest(Profile client)
        {
            Give_Interest example = new Calculate_Interest();
            double accountBal = 20000;
            example.ThisAbstractFunction(client);
            mainMenu(client);
            //int months;
            //float currentBalance = accountBalance;
            //float nextMonth;
            //Console.WriteLine("Hi, {0} how many months ahead do you want to calculate?", firstName);
            //months = int.Parse(Console.ReadLine());
            //for (int i = 0; i < months; i++)
            //{
            //currentBalance = (currentBalance * savingsInterestRate) + currentBalance;
            //nextMonth = currentBalance;
            //}
            //Console.WriteLine("In {0} months you will have {1} in your account", months, currentBalance);
            //Client.mainMenu(Client);
        }

        public void exitSession(Profile client)
        {
            Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", client.FirstName);
        }

        public void mainMenu(Profile client)
        {
            ClientFunction clientMenu = new ClientFunction();
            Profile Client;
            Client = client;
            int choice;
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: View Transactions | 5: Calulate Interest | 6: Call Transform | 7: Exit Session/Return Card");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    depositMoney(Client);
                    break;

                case 2:
                    clientMenu.withrawMoney(Client);
                    break;

                case 3:
                    clientMenu.displayBalance(Client);
                    break;

                case 4:
                    ViewTransactions(Client);
                    break;

                case 5:
                    calculateInterest(Client);
                    break;

                case 6:
                    CallTransform(Client);
                    break;

                case 7:
                    exitSession(Client);
                    break;

            }
        }

    }
}

