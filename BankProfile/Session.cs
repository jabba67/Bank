//This class initializes a client session
//We validate the user first
//Then we pull info down from the database
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace BankProfile
{
    class Session:Profile
    {
        public static void Main()
        //public void GetUserInfo()
        {
            //pull info from database and assign to profile properties
            //use this to match password with accountnumber: select Password from UserInformation where AccountNumber = "45505";
            int enteredAccountNumber;
            string enteredPassword;
            Console.WriteLine("Please enter your Account Number:");
            enteredAccountNumber = int.Parse(Console.ReadLine());
            Console.WriteLine("Please enter your password:");
            enteredPassword = Console.ReadLine();

            string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //Connect string containing HostIp, UserName, DatabaseName, Port, Password
            MySqlConnection conn = new MySqlConnection(connStr);
            string RetrievedPassword;
            try
            {
                Console.WriteLine("Connecting to MySQL...");
                conn.Open();

                //string sql = "use Bank;" + "\n" + "select * from UserInformation" + "\n" + "go";
                string sql = "select Password from UserInformation where AccountNumber = " + enteredAccountNumber; //Retrieve password from row that matches Account Number match
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    RetrievedPassword = rdr.GetString(0);
                    Console.WriteLine("The output is: " + RetrievedPassword); //read general output

                    if (enteredPassword == RetrievedPassword)
                    {
                        Console.WriteLine("The Passwords Match yo!");

                    }
                    else
                    {
                        Console.WriteLine("Lock this dude out frrrrrr!");
                    }
                }
                rdr.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();
            Console.WriteLine("Done.");
            


        }
        public void CreateSession(Profile client)
        {
            Profile profile;
            profile = client;
            
        }
    }
}
