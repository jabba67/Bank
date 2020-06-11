
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace BankProfile
{
    public class ClientFunction: Profile
    {

        public static void depositMoney(Profile client)
        {
            float depositAmount;
            Console.WriteLine("Your account balance is " + client.AccountBalance);
            Console.WriteLine("The current account number is " + client.AccountNumber);
            Console.WriteLine("How much would you like to deposit?");
            depositAmount = float.Parse(Console.ReadLine());
            client.AccountBalance += depositAmount;
            Console.WriteLine("Your account balance is now: {0}", client.AccountBalance);
            //Build sql statement to log deposit into history table
            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //Connect string containing HostIp, UserName, DatabaseName, Port, Password
            MySqlConnection conn = new MySqlConnection(connStr);
            conn.Open();
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber ; //Retrieve password from row that matches Account Number match
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();

            mainMenu(client);
            }
     
        public static void withrawMoney(Profile client)
        {
            float widthdrawAmount;
            string response;

            Console.WriteLine("How much would you like to widthdraw?");
            widthdrawAmount = float.Parse(Console.ReadLine());
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            client.AccountBalance -= widthdrawAmount;
            //Build sql statement to log deposit into history table
            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //Connect string containing HostIp, UserName, DatabaseName, Port, Password
            MySqlConnection conn = new MySqlConnection(connStr);
            conn.Open();
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber; //Retrieve password from row that matches Account Number match
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
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
        public void transferMoney()
        {

        }

        public static void displayBalance(Profile client)
        {
            Console.WriteLine("Your current account balance is {0}", client.AccountBalance);
            mainMenu(client);
        }

        public void calculateInterest(Profile client)
        {
            Profile Client;
            Client = client;
            int months;
            //float currentBalance = accountBalance;
            float nextMonth;
            //Console.WriteLine("Hi, {0} how many months ahead do you want to calculate?", firstName);
            months = int.Parse(Console.ReadLine());
            for (int i = 0; i < months; i++)
            {
                //currentBalance = (currentBalance * savingsInterestRate) + currentBalance;
                //nextMonth = currentBalance;
            }

            //Console.WriteLine("In {0} months you will have {1} in your account", months, currentBalance);
            //Client.mainMenu(Client);
        }

        public static void exitSession(Profile client)
        {
            Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", client.FirstName);
        }

        public static void mainMenu(Profile client)
        {
            Profile Client;
            Client = client;
            int choice;
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: Calculate Future Balance | 5: Exit Session/Return Card");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    depositMoney(Client);
                    break;

                case 2:
                    withrawMoney(Client);
                    break;

                case 3:
                    displayBalance(Client);
                    break;

                case 4:
                    //calculateInterest(Client);
                    break;

                case 5:
                    exitSession(Client);
                    break;

            }
        }

    }
}

