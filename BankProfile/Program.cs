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

        //public void depositMoney(float _accountNumber, ref float _accountBalance)
        public void depositMoney()
        {
            float depositAmount;
            //accountBalance = _accountBalance;
            double inputAccount;
            string retry;

            Console.WriteLine("What is your account number?");
            inputAccount = double.Parse(Console.ReadLine());

            if (accountNumber == inputAccount)
            {
                Console.WriteLine("How much would you like to deposit?");
                depositAmount = float.Parse(Console.ReadLine());
                accountBalance += depositAmount;
                Console.WriteLine("Your account balance is now: {0}", accountBalance);
            }
            else
            {
                Console.WriteLine("You have entered the wrong account number! Calling the cops on yo ass now!");
                Console.WriteLine("Would you like to try again?");
                retry = Console.ReadLine();
                if (retry == "yes")
                {
                    depositMoney();
                }
                else
                {
                    Console.WriteLine("L8tr bruh");
                }
            }

        }

        public static void Main()
        {
            //Random rnd = new Random();
            //Double _accountNumber = rnd.Next(10000, 50000);
            //Console.WriteLine("Hello, your account number is: {0}", _accountNumber);
            int choice;
            Profile Client = new Profile("Tyler", "J", "Rubin", 25, "625-13-3271", "04/15/1995", "9518 Lavender Star Drive",17.5f);
            Console.WriteLine("Welcome {0}", Client.firstName);
            Console.WriteLine("Your Bank Account Number is: {0}", Client.accountNumber);
            Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            Console.WriteLine("Some basic account information is: DOB: {0}, SSN: {1}, Address: {2} ", Client.birthDate, Client.socialSecurity, Client.address);
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance");
            choice = int.Parse(Console.ReadLine());
            switch(choice)
            {
                case 1:
                    Client.depositMoney();
                    break;

                case 2:

                    break;

                case 3:

                    break;


            }
            

        }
    }

    
}