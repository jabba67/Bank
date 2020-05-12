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
        private float savingsInterestRate;

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
            savingsInterestRate = .02f;

        }

        public void depositMoney(Profile client)
        {
            Profile Client;
            Client = client;
            float depositAmount;
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
                Client.mainMenu(Client);
            }
            else
            {
                Console.WriteLine("You have entered the wrong account number! Calling the cops on yo ass now!");
                Console.WriteLine("Would you like to try again?");
                retry = Console.ReadLine();
                if (retry == "yes")
                {
                    Client.depositMoney(client);
                }
                else
                {
                    Console.WriteLine("L8tr bruh");
                    Client.mainMenu(Client);
                }
            }

        }

        public void withrawMoney(Profile client)
        {
            Profile Client;
            Client = client;
            float widthdrawAmount;
            string response;

            Console.WriteLine("How much would you like to widthdraw?");
            widthdrawAmount = float.Parse(Console.ReadLine());
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            accountBalance = accountBalance - widthdrawAmount;
            Console.WriteLine("Would you like to know your current balanced?");
            response = Console.ReadLine();
            if (response == "yes")
            {
                displayBalance(Client);
                Client.mainMenu(Client);
            }
            else
            {
                Client.mainMenu(Client);
            }
        }

        public void transferMoney()
        {

        }

        public void displayBalance(Profile client)
        {
            Profile Client;
            Client = client;
            Console.WriteLine("Your current account balance is {0}", accountBalance);
            Client.mainMenu(Client);
        }

        public void calculateInterest(Profile client)
        {
            Profile Client;
            Client = client;
            int months;
            float currentBalance = accountBalance;
            float nextMonth;
            Console.WriteLine("Hi, {0} how many months ahead do you want to calculate?", firstName);
            months = int.Parse(Console.ReadLine());
            for (int i = 0; i < months; i++)
            {
                currentBalance = (currentBalance * savingsInterestRate) + currentBalance;
                nextMonth = currentBalance;
            }
            
            Console.WriteLine("In {0} months you will have {1} in your account", months, currentBalance);
            Client.mainMenu(Client);

        }
        
        public void exitSession(Profile client)
        {
            Profile Client;
            Client = client;

            Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", Client.firstName);
        }

        public void mainMenu(Profile client)
        {
            Profile Client;
            Client = client;
            int choice;
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: Calculate Future Balance | 5: Exit Session/Return Card");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    Client.depositMoney(Client);
                    break;

                case 2:
                    Client.withrawMoney(Client);
                    break;

                case 3:
                    Client.displayBalance(Client);
                    break;

                case 4:
                    Client.calculateInterest(Client);
                    break;

                case 5:
                    Client.exitSession(Client);
                    break;


            }
        }
        public static void Main()
        {
            Profile Client = new Profile("Tyler", "J", "Rubin", 25, "625-13-3271", "04/15/1995", "9518 Lavender Star Drive",17.5f);
            Console.WriteLine("Welcome {0}", Client.firstName);
            Console.WriteLine("Your Bank Account Number is: {0}", Client.accountNumber);
            Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            Console.WriteLine("Some basic account information is: DOB: {0}, SSN: {1}, Address: {2} ", Client.birthDate, Client.socialSecurity, Client.address);
            Client.mainMenu(Client);
            
        }
    }

    
}