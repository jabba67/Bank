using System;

namespace BankProfile
{
    public class Profile
    {
        private string firstName;
        private string middleName = "";
        private string lastName;
        private int age;
        private string socialSecurity;
        private string birthDate;
        private string address;
        private double accountNumber;
        private float accountBalance;

        public Profile(string _firstName, string _middleName, string _lastName, int _age, string _socialSecurity, string _birthDate, string _address, float _accountBalance)
        {
            Random rnd = new Random();
            firstName = _firstName;
            middleName = _middleName;
            lastName = _lastName;
            age = _age;
            socialSecurity = _socialSecurity;
            birthDate = _birthDate;
            address = _address;
            accountNumber = rnd.Next(10000, 50000);
            accountBalance = _accountBalance;

        }

        public void generateAccountNumber(ref double _accountNumber)
        {
            Console.WriteLine();
        }
        public static void Main()
        {
            //Random rnd = new Random();
            //Double _accountNumber = rnd.Next(10000, 50000);
            //Console.WriteLine("Hello, your account number is: {0}", _accountNumber);
            Profile Client = new Profile("Tyler", "J", "Rubin", 25, "625-13-3271", "04/15/1995", "9518 Lavender Star Drive",17.5f);
            Console.WriteLine("Welcome {0}", Client.firstName);
            Console.WriteLine("Your Bank Account Number is: {0}", Client.accountNumber);
            Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            Console.WriteLine("Some basic account information is: DOB: {0}, SSN: {1}, Address: {2} ", Client.birthDate, Client.socialSecurity, Client.address);

        }
    }

    
}