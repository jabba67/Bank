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
        //Session client = new Session();


        public static void Main()
        {
            GetUserInfo();
        }
        public static void GetUserInfo()
        {
            Console.WriteLine("Are you a new client? Answer y if YES if No enter n");
            string response = (Console.ReadLine());

            if (response == "n")
            {
                newClient();
            }

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
            bool verified = false;
            //Implement try catch later to catch exceptions
            try
            {
                Console.WriteLine("Connecting to MySQL...");
                conn.Open();

                string sql = "select Password from UserInformation where AccountNumber = " + enteredAccountNumber; //Retrieve password from row that matches Account Number match
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();

                
            while (rdr.Read())
            {
                RetrievedPassword = rdr.GetString(0);
                Console.WriteLine("The output is: " + RetrievedPassword); //read general output

                //***Create logic for password validation in the future
                if (enteredPassword == RetrievedPassword)
                {
                    Console.WriteLine("The Passwords Match yo!");
                    verified = true;
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

            if (verified == true)
            {
                Session.CreateSession(enteredAccountNumber);
                Console.WriteLine("The account is verified true");
            }
            else
            {
                //***Create logic here too
            }

        }
        public static void CreateSession(int enteredAccountNumber)
        {
            var profile = new Profile();



            string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //Connect string containing HostIp, UserName, DatabaseName, Port, Password
            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                conn.Open();
                string sql = "select * from UserInformation where AccountNumber = " + enteredAccountNumber; //Retrieve password from row that matches Account Number match
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();


                while (rdr.Read())
                {
                    profile.FirstName = rdr.GetString(0);
                    profile.AccountBalance = rdr.GetInt32(1);
                    profile.LastName = rdr.GetString(2);
                    profile.Age = rdr.GetInt32(3);
                    profile.BirthDate = rdr.GetString(4);
                    profile.SocialSecurityNumber = rdr.GetString(5);
                    profile.Address = rdr.GetString(6);
                    profile.PhoneNumber = rdr.GetString(7);
                    profile.Email = rdr.GetString(8);

                    //***Save for debugging database pull
                    /*Console.WriteLine(profile.FirstName);
                    Console.WriteLine("balance is " + profile.AccountBalance);
                    Console.WriteLine(profile.LastName);
                    Console.WriteLine(profile.Age);
                    Console.WriteLine(profile.BirthDate);
                    Console.WriteLine(profile.SocialSecurityNumber);
                    Console.WriteLine(profile.Address);
                    Console.WriteLine(profile.PhoneNumber);
                    Console.WriteLine(profile.Email);*/

                }
                rdr.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();

            ClientFunction.mainMenu(profile);
        }

    }
}
