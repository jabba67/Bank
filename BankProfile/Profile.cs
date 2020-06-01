using System;
using System.IO;

namespace BankProfile
{
    public class Profile
    {
        private string firstName; //First + Middle + Last make up Full Name
        private string middleName = ""; //First + Middle + Last make up Full Name
        private string lastName; //First + Middle + Last make up Full Name
        private int age;
        private string birthDate;
        private string socialSecurityNumber;
        private string address;
        private string phoneNumber;
        private string email; //Client Email Address
        private double accountNumber; //Doubles for the routing number
        private float accountBalance;
        private string useless; //Delete this later

        public Profile ()
        {
            firstName = "";
            middleName = "";
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
            middleName = _middleName;
            lastName = _lastName;
            age = _age;
            socialSecurityNumber = _socialSecurityNumber;
            birthDate = _birthDate;
            address = _address;
            phoneNumber = _phoneNumber;
            email = _email;
            accountBalance = _accountBalance;

        }

        public void newClient(Profile client) //This function gathers new client information and stores it into the database
        {
            Profile Client;
            Client = client;
            Random rnd = new Random();
            /*string firstName;
            string middleName;
            string lastName;
            int age;
            string socialSecurity;
            string birthDate;
            string address;
            float accountBalance;*/
            Client.accountNumber = rnd.Next(10000, 50000); ;


            Console.WriteLine("New Client, what's your first name?");
            Client.firstName = Console.ReadLine();

            Console.WriteLine("{0}, what's your middle name?", firstName);
            Client.middleName = Console.ReadLine();

            Console.WriteLine("{0}, what's your last name?", firstName);
            Client.lastName = Console.ReadLine();

            Console.WriteLine("{0}, what's your age?", firstName);
            Client.age = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}, what's your Social Security Number?", firstName);
            Client.socialSecurity = Console.ReadLine();

            Console.WriteLine("{0}, what's your birth date?", firstName);
            Client.birthDate = Console.ReadLine();

            Console.WriteLine("{0}, what's your address?", firstName);
            Client.address = Console.ReadLine();

            Console.WriteLine("{0}, what's your starting balance?", firstName);
            Client.accountBalance = float.Parse(Console.ReadLine());

            string ComposedFileName = "C:\\Git\\Bank\\BankProfile\\" + accountNumber + ".txt";
            Console.WriteLine("The composed string reads as {0}", ComposedFileName);
            Console.WriteLine(File.Exists(ComposedFileName) ? "Client exists." : "Client does not exist."); //Check to see if the client already exists
            using System.IO.StreamWriter file = new System.IO.StreamWriter(ComposedFileName);

            file.WriteLine(Client.firstName);
            file.WriteLine(Client.middleName);
            file.WriteLine(Client.lastName);
            file.WriteLine(Client.age);
            file.WriteLine(Client.socialSecurity);
            file.WriteLine(Client.birthDate);
            file.WriteLine(Client.address);
            file.WriteLine(Client.accountNumber);
            file.WriteLine(Client.accountBalance);
            Client.mainMenu(Client);
        }


    }