using System;
using System.IO;
using System.Collections.Generic;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace BankProfile
{
    public class Profile
    {
        private string firstName; //First + Middle + Last make up Full Name
        //public string middleName = ""; //First + Middle + Last make up Full Name
        private string lastName; //First + Middle + Last make up Full Name
        private int age;
        private string birthDate;
        private string socialSecurityNumber;
        private string address;
        private string phoneNumber;
        private string email; //Client Email Address
        private double accountNumber; //Doubles for the routing number
        private float accountBalance;

        public Profile()
        {
            firstName = "";
            //middleName = "";
            lastName = "";
            age = 0;
            socialSecurityNumber = "";
            birthDate = "";
            address = "";
            phoneNumber = "";
            email = "";
            accountNumber = 0;
            accountBalance = 0;
        }
        public Profile(string _firstName, string _middleName, string _lastName, int _age, string _socialSecurityNumber, string _birthDate, string _address, string _phoneNumber, string _email, float _accountBalance)
        {
            Random rnd = new Random();
            firstName = _firstName;
            //middleName = _middleName;
            lastName = _lastName;
            age = _age;
            socialSecurityNumber = _socialSecurityNumber;
            birthDate = _birthDate;
            address = _address;
            phoneNumber = _phoneNumber;
            email = _email;
            accountBalance = _accountBalance;

        }

        public double AccountNumber
        {
            get
            {
                return this.accountNumber;
            }
        }

        public float AccountBalance
        {
            get
            {
                return this.accountBalance;
            }
        }

        public string Email
        {
            get
            {
                return this.email;
            }
        }

        public string PhoneNumber
        {
            get
            {
                return this.phoneNumber;
            }
        }

        public string Address
        {
            get
            {
                return this.address;
            }

        }

        //public void newClient(Profile client) //This function gathers new client information and stores it into the database
        public static void Main() //This function gathers new client information and stores it into the database
        {
            //Profile Client;
            //Client = client;
            Random rnd = new Random();
            string firstName;
            //string middleName;
            string lastName;
            int age;
            string socialSecurityNumber;
            string phoneNumber;
            string birthDate;
            string address;
            string email;
            float accountBalance;
            double accountNumber;

            accountNumber = rnd.Next(10000, 50000); ;
            Console.WriteLine("New Client, what's your first name?");
            firstName = Console.ReadLine();

            //Console.WriteLine("{0}, what's your middle name?", firstName);
            //Client.middleName = Console.ReadLine();

            Console.WriteLine("{0}, what's your last name?", firstName);
            lastName = Console.ReadLine();

            Console.WriteLine("{0}, what's your age?", firstName);
            age = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}, what's your Social Security Number?", firstName);
            socialSecurityNumber = Console.ReadLine();

            Console.WriteLine("{0}, what's your birth date?", firstName);
            birthDate = Console.ReadLine();

            Console.WriteLine("{0}, what's your address?", firstName);
            address = Console.ReadLine();

            Console.WriteLine("{0}, what's your phone number?", firstName);
            phoneNumber = Console.ReadLine();

            Console.WriteLine("{0}, what's your email?", firstName);
            email = Console.ReadLine();

            Console.WriteLine("{0}, what's your starting balance?", firstName);
            accountBalance = float.Parse(Console.ReadLine());

            string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //HostIp, UserName, DatabaseName, Port, Password
            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                //Console.WriteLine("Connecting to MySQL...");
                conn.Open();
                MySqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Insert into UserInformation(FirstName, AccountBalance, LastName, Age, BirthDate, SocialSecurityNumber, Address, PhoneNumber, EmailAddress, AccountNumber) Values(?FirstName, ?AccountBalance, ?LastName, ?Age, ?BirthDate, ?SocialSecurityNumber, ?Address, ?PhoneNumber, ?EmailAddress, ?AccountNumber)";
                cmd.Parameters.Add("?FirstName", MySqlDbType.VarChar).Value = firstName;
                cmd.Parameters.Add("?AccountBalance", MySqlDbType.Float).Value = accountBalance;
                cmd.Parameters.Add("?LastName", MySqlDbType.VarChar).Value = lastName;
                cmd.Parameters.Add("?Age", MySqlDbType.Int16).Value = age;
                cmd.Parameters.Add("?BirthDate", MySqlDbType.VarChar).Value = birthDate;
                cmd.Parameters.Add("?SocialSecurityNumber", MySqlDbType.VarChar).Value = socialSecurityNumber;
                cmd.Parameters.Add("?Address", MySqlDbType.VarChar).Value = address;
                cmd.Parameters.Add("?PhoneNumber", MySqlDbType.VarChar).Value = phoneNumber;
                cmd.Parameters.Add("?EmailAddress", MySqlDbType.VarChar).Value = email;
                cmd.Parameters.Add("?AccountNumber", MySqlDbType.Int16).Value = accountNumber;
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();
            Console.WriteLine("New client profile has sucessfully been created! :D");


            //InsertCommand = "insert into UserInformation Values({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}), firstName, accountBalance, lastName, age, birthDate, socialSecurityNumber, phoneNumber, email,accountNumber")
            //    insert into UserInformation Values("Johnny", 1000, "Fields", 25, "01/02/2001", "1234567891", "123 Avenue", "1-800-101-1092", "Iamabrokeboi@yahoo.com", "123456")

            /*string ComposedFileName = "C:\\Git\\Bank\\BankProfile\\" + accountNumber + ".txt";
            Console.WriteLine("The composed string reads as {0}", ComposedFileName);
            Console.WriteLine(File.Exists(ComposedFileName) ? "Client exists." : "Client does not exist."); //Check to see if the client already exists
            using System.IO.StreamWriter file = new System.IO.StreamWriter(ComposedFileName); 

            file.WriteLine(Client.firstName);
            file.WriteLine(Client.middleName);
            file.WriteLine(Client.lastName);
            file.WriteLine(Client.age);
            file.WriteLine(Client.socialSecurityNumber);
            file.WriteLine(Client.birthDate);
            file.WriteLine(Client.address);
            file.WriteLine(Client.accountNumber);
            file.WriteLine(Client.accountBalance);*/
            //Client.mainMenu(Client);
        }


    }
}