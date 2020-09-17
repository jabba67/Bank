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
    public class Session
    {
        string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";

        public static void Main()
        {
            Console.WriteLine("Are you a new client? Answer y if YES if No enter n");
            string response = (Console.ReadLine());

            if (response.Contains("y"))
            {
                Profile newProfile = new Profile();
                newProfile.newClient();
            }
            else if (response.Contains("n"))
            {
                Session newSession = new Session();
                newSession.GetUserInfo();
            }
        }

        public void GetUserInfo()
        {
            //pull info from database and assign to profile properties
            //use this to match password with accountnumber: select Password from UserInformation where AccountNumber = "45505";
            string enteredEmailAddress;
            string enteredPassword;

        EmailEnter:
            Console.WriteLine("Please enter your Email Address:");
            enteredEmailAddress = Console.ReadLine();
            if (!enteredEmailAddress.Contains(".com"))
            {
                Console.WriteLine("Please enter a valid email address");
                goto EmailEnter;
            }

        PasswordEnter:
            Console.WriteLine("Please enter your password:");
            enteredPassword = Console.ReadLine();

            MySqlConnection conn = new MySqlConnection(ConnectionString);
            string RetrievedPassword;
            bool verified = false;
            try
            {
                conn.Open();
                string sql = "select Password from UserInformation where EmailAddress = " + '"' + enteredEmailAddress + '"'; //Retrieve password from row that matches Account Number match
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();
                
            while (rdr.Read())
            {
                RetrievedPassword = rdr.GetString(0);
                //Console.WriteLine("The output is: " + RetrievedPassword); //read general output
                if (enteredPassword == RetrievedPassword)
                {
                    Console.WriteLine("Login Successful" + '\n');
                    verified = true;
                }
                else
                {
                    Console.WriteLine("Login Unsucessful ACCESS DENIED" + '\n');
                }
            }
            rdr.Close();
            }
            catch (Exception ex)
            {
            Console.WriteLine(ex.ToString());
            }
            conn.Close();

            if (verified == true)
            {
                this.CreateSession(enteredEmailAddress);
                Console.WriteLine("Closing Session");
            }
            else
            {
                goto PasswordEnter;
            }
        }
        public void CreateSession(string enteredEmailAddress)
        {
            Profile profile = new Profile();

            MySqlConnection conn = new MySqlConnection(ConnectionString);
            try
            {
                conn.Open();
                string sql = "select * from UserInformation where EmailAddress = " + '"' + enteredEmailAddress + '"'; //Retrieve password from row that matches Account Number match
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    profile.FirstName = rdr.GetString(0);
                    profile.AccountBalance = rdr.GetInt32(1);
                    profile.CheckingAccountBalance = rdr.GetInt32(2);
                    profile.LastName = rdr.GetString(3);
                    profile.Age = rdr.GetInt32(4);
                    profile.BirthDate = rdr.GetString(5);
                    profile.SocialSecurityNumber = rdr.GetString(6);
                    profile.Address = rdr.GetString(7);
                    profile.PhoneNumber = rdr.GetString(8);
                    profile.Email = rdr.GetString(9);
                    profile.AccountNumber = rdr.GetInt32(10);
                    profile.CheckingAccountNumber = rdr.GetInt32(11);

                }
                rdr.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();

            ClientFunction clientMenu = new ClientFunction();
            clientMenu.mainMenu(profile);
        }

    }
}
