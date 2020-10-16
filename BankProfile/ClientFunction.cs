
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
            mainMenuAsync(Client);
        }
    }

    public class GenerateCheckingAccountStatement : StatementGeneration
    {
        public override void GenerateStatement(Profile Client, int response)
        {
            Console.WriteLine("I generate checking account statements here:" + '\n');
            ViewTransactions(Client, response);
            mainMenuAsync(Client);
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
            mainMenuAsync(client);
            }
     
        public async Task<int> withrawMoney(Profile client, float money)
        {
            float widthdrawAmount = money;
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            client.AccountBalance -= widthdrawAmount;

            var c = connections.ConnectToDataBase();

            //Update statement: update UserInformation set AccountBalance = 20000 where FirstName = "Tyler"
            string sql = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber;
            await c2.Execute(sql, c);
            c.Close();
            return 5;
        }

        public async Task TransferMoney(Profile client, string recipientEmailAddress, float amountToTransfer, int chosenAccountNumber)
        { 
            string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";
            int recipientAccountNumber = 0;
            float recipientAccountBalance = 0;
            double transferFromAccount = chosenAccountNumber;
            string accountType = "";
            float senderBalance = 0;
            if (transferFromAccount == 1)
            {
                transferFromAccount = client.AccountNumber;
                senderBalance = client.AccountBalance - amountToTransfer;
                accountType = "AccountBalance";
            }
            if (transferFromAccount == 2)
            {
                transferFromAccount = client.CheckingAccountNumber;
                senderBalance = client.CheckingAccountBalance - amountToTransfer;
                accountType = "CheckingAccountBalance";
            }

            MySqlConnection conn = new MySqlConnection(ConnectionString);
            try
            {
                conn.Open();
                string sqlFind = "select AccountNumber, AccountBalance from UserInformation where EmailAddress = '" + recipientEmailAddress + "'";
                MySqlCommand cmd = new MySqlCommand(sqlFind, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    recipientAccountNumber = rdr.GetInt32(0);
                    recipientAccountBalance = rdr.GetInt32(1);
                }
                rdr.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();

            //client.AccountBalance -= amountToTransfer;//Update Senders Account Balance
            recipientAccountBalance += amountToTransfer; //Update Recipients Account Balance

            var c = connections.ConnectToDataBase();
            string sql = "insert CustomerToCustomer set FromAccountNumber = " + transferFromAccount + ", ToAccountNumber = " + recipientAccountNumber; //Update C2C Table with FromAccountNumber and ToAccountNumber
            c2.Execute(sql, c);
            string sql2 = "update UserInformation set " + accountType + " = " + senderBalance + " where AccountNumber = " + client.AccountNumber; //Update Balance in Sender Account
            c2.Execute(sql2, c);
            string sql3 = "update UserInformation set AccountBalance = " + recipientAccountBalance + " where AccountNumber = " + recipientAccountNumber; //Update Balance in Recipient Account
            c2.Execute(sql3, c);
            c.Close();

            await mainMenuAsync(client);
        }
        public void ViewTransactions(Profile client, int response)
        {
            //string sql = "select Transaction as 'Amount', TransType as 'Tranaction', Time as 'Time of Transaction' from TransactionTracking where AccountNumber = " + client.AccountNumber;
            var conn = connections.ConnectToDataBase();
            int responsefromMenu = response;
            string sql = "";
            
            if (responsefromMenu == 1)
            {
                //sql = "select * from TransactionTracking where AccountNumber = " + client.AccountNumber;
                sql = "select Transaction as 'Amount', TransType as 'Transaction', Time as 'Time of Transaction', AccountNumber from TransactionTracking where AccountNumber = " + client.AccountNumber;
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
                    Console.WriteLine(rdr["Amount"]); //Read by column
                    //totalMoneyTemp = int.Parse(rdr.GetString(0));
                    //totalMoney += totalMoneyTemp;
                    //transactions++;
                    Console.WriteLine("Transaction Type:");
                    Console.WriteLine(rdr["Transaction"]); //Read by column
                    Console.WriteLine("Transaction Time:");
                    Console.WriteLine(rdr["Time of Transaction"]); //Read by column
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
            mainMenuAsync(client);
        }

        public async Task CallTransformAsync(Profile client)
        {
            double AccountBalanceInitial = client.AccountBalance * 0;
            MultipleAsync Test = new MultipleAsync();
            Test.TestingAsyncMethods(AccountBalanceInitial);
            await mainMenuAsync(client);
        }

        public async Task displayBalanceAsync(Profile client)
        {
            Console.WriteLine("Your current account balance is {0}", client.AccountBalance);
            Console.WriteLine("Account Number: " + client.AccountNumber + '\n' + "Checking Account Number: " + client.CheckingAccountNumber);
            await mainMenuAsync(client);
        }

        public async Task calculateInterestAsync(Profile client)
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
            await mainMenuAsync(client);
        }

        public async Task printAccountStatementAsync(Profile client)
        {
            var c = connections.ConnectToDataBase();
            string sql = "select * from TransactionTracking where AccountNumber=" + client.AccountNumber;
            await c2.Execute(sql, c);
            Console.WriteLine(c2);
            c.Close();
            await mainMenuAsync(client);
        }

        public void exitSession(Profile client)
        {
            Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", client.FirstName);
        }

        public async Task mainMenuAsync(Profile client)
        {
            StatementGeneration generalAccountStatement = new GenerateGeneralAccountStatement();
            StatementGeneration checkingAccountStatement = new GenerateCheckingAccountStatement();
            int response = 0;
            int choice;
            string balanceCheck;
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: View Transactions | 5: Calulate Interest | '\n' 6: Call Transform | 7: Exit Session/Return Card | 8: Generate Statements | 9: Transfer Money");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    await depositMoney(client);
                    break;

                case 2:
                    Console.WriteLine("How much would you like to widthdraw?");
                    float widthdrawAmount = float.Parse(Console.ReadLine()); //Potential SQL Injection point
                    await withrawMoney(client, widthdrawAmount);
                    Console.WriteLine("Would you like to know your current balance?");
                    balanceCheck = Console.ReadLine();
                    if (balanceCheck == "yes")
                    {
                        displayBalanceAsync(client);
                        await mainMenuAsync(client);
                    }
                    else
                    {
                        await mainMenuAsync(client);
                    }
                    break;

                case 3:
                    displayBalanceAsync(client);
                    break;

                case 4:
                    ViewTransactions(client, response);
                    break;

                case 5:
                    await calculateInterestAsync(client);
                    break;

                case 6:
                    CallTransformAsync(client);
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
                case 9:
                    string recipientEmailAddress = "";
                    int fromAccountNumber = 0;
                    float recipentAmount = 0;

                    Console.WriteLine("Please Enter the Email Address of the Desired Recipient: ");
                    recipientEmailAddress = Console.ReadLine();
                    Console.WriteLine("Please Select The Account You Would Like to Transfer Money From: " + '\n' + "1: Checking Account 1" + '\n' + "2: Checking Account 2");
                    fromAccountNumber = int.Parse(Console.ReadLine());
                    Console.WriteLine("Please Enter the Amount You Would Like to Transfer to the Recipient: $");
                    recipentAmount = float.Parse(Console.ReadLine());
                    TransferMoney(client, recipientEmailAddress, recipentAmount, fromAccountNumber);
                    break;
            }
        }

    }
}

