
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace BankProfile
{
    class ClientFunction: Profile
    {

        public void loginExistingClient(double _accountNumber, Profile client)
        {
            Profile Client;
            Client = client;
            bool exists;
            //Profile Client = new Profile(firstName, middleName, lastName, age, socialSecurity, birthDate, address, accountBalance);
            double existingAccountNumber = _accountNumber;
            string attemptedFileAccess = "C:\\Git\\Bank\\BankProfile\\" + existingAccountNumber + ".txt";
            //Console.WriteLine("The composed string reads as {0}", attemptedFileAccess);
            Console.WriteLine(File.Exists(attemptedFileAccess) ? exists = true : exists = false); //Check to see if the client already exists
            if (exists == true)
            {
                using System.IO.StreamReader file = new StreamReader(attemptedFileAccess);
                int counter = 1;
                for (int i = 0; i <= 10; i++)
                {
                    switch (counter)
                    {
                        case 1:
                            //Client.firstName = file.ReadLine();
                            counter++;
                            break;
                        case 2:
                            //Client.middleName = file.ReadLine();
                            counter++;
                            break;
                        case 3:
                            //Client.lastName = file.ReadLine();
                            counter++;
                            break;
                        case 4:
                            //Client.age = Convert.ToInt32(file.ReadLine());
                            counter++;
                            break;
                        case 5:
                            //Client.socialSecurityNumber = Convert.ToString(file.ReadLine());
                            counter++;
                            break;
                        case 6:
                            //Client.birthDate = file.ReadLine();
                            counter++;
                            break;
                        case 7:
                            //Client.address = file.ReadLine();
                            counter++;
                            break;
                        case 8:
                            //Client.accountNumber = Convert.ToDouble(file.ReadLine());
                            counter++;
                            break;
                        case 9:
                            //Client.accountBalance = float.Parse(file.ReadLine());
                            counter++;
                            break;
                        case 10:
                            //Client.savingsInterestRate = Convert.ToSingle(file.ReadLine());
                            counter++;
                            break;
                    }
                }
            }

            /*
            Console.WriteLine("Testing that we got all the info:");
            Console.WriteLine(Client.firstName);
            Console.WriteLine(Client.middleName);
            Console.WriteLine(Client.lastName);
            Console.WriteLine(Client.age);
            Console.WriteLine(Client.socialSecurityNumber);
            Console.WriteLine(Client.birthDate);
            Console.WriteLine(Client.address);
            Console.WriteLine(Client.accountNumber);
            Console.WriteLine(Client.accountBalance);
            //Client.mainMenu(Client);*/

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

            if (AccountNumber == inputAccount)
            {
                Console.WriteLine("How much would you like to deposit?");
                depositAmount = float.Parse(Console.ReadLine());
                //accountBalance += depositAmount;
                Console.WriteLine("Your account balance is now: {0}", AccountBalance);
                //Client.mainMenu(Client);
            }
            else
            {
                Console.WriteLine("You have entered the wrong account number! Calling the cops on yo ass now!");
                Console.WriteLine("Would you like to try again?");
                retry = Console.ReadLine();
                if (retry == "yes")
                {
                    //Client.depositMoney(client);
                }
                else
                {
                    Console.WriteLine("L8tr bruh");
                    //Client.mainMenu(Client);
                }
            }

        }
        public void withrawMoney(Profile client)
        {
            Profile profile;
            profile = client;
            float widthdrawAmount;
            string response;

            Console.WriteLine("How much would you like to widthdraw?");
            widthdrawAmount = float.Parse(Console.ReadLine());
            Console.WriteLine("{0} has been dispensed from the machine", widthdrawAmount);
            //accountBalance = accountBalance - widthdrawAmount;
            Console.WriteLine("Would you like to know your current balanced?");
            response = Console.ReadLine();
            if (response == "yes")
            {
                displayBalance(profile);
                //profile.mainMenu(profile);
            }
            else
            {
                //profile.mainMenu(profile);
            }
        }
        public void transferMoney()
        {

        }

        public void displayBalance(Profile client)
        {
            Profile Client;
            Client = client;
            //Console.WriteLine("Your current account balance is {0}", accountBalance);
            //Client.mainMenu(Client);
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

        public void exitSession(Profile client)
        {
            Profile Client;
            Client = client;
            //Console.WriteLine("Thank you {0} for using Bank of Tyler!!! Have a great day! Uwu ^_^", firstName);
        }

        public void mainMenu(Profile client)
        {
            Profile Client;
            Client = client;
            int choice;
            //Console.WriteLine("Welcome {0}", Client.firstName);
            //Console.WriteLine("Your Bank Account Number is: {0}", Client.accountNumber);
            //Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            //Console.WriteLine("Some basic account information is: DOB: {0}, SSN: {1}, Address: {2} ", Client.birthDate, Client.socialSecurityNumber, Client.address);
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: Calculate Future Balance | 5: Exit Session/Return Card");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    //Client.depositMoney(Client);
                    break;

                case 2:
                    //Client.withrawMoney(Client);
                    break;

                case 3:
                    //Client.displayBalance(Client);
                    break;

                case 4:
                    //Client.calculateInterest(Client);
                    break;

                case 5:
                    //Client.exitSession(Client);
                    break;

            }
        }

        /*
        public static void Main()
        {
            Profile Client = new Profile();
            string response;
            int enteredAccountNumber;
            Console.WriteLine("Are you a new client or an existing client?");
            response = Console.ReadLine();

            if (response == "new")
            {
                Client = new Profile();//(firstName, middleName, lastName, age, socialSecurity, birthDate, address, accountBalance);
                Client.newClient(Client);
                //Client.mainMenu(Client);
            }
            else
            {
                Client = new Profile();
                Console.WriteLine("Please enter your account number: ");
                enteredAccountNumber = int.Parse(Console.ReadLine());
                //Client.loginExistingClient(enteredAccountNumber, Client);

            }

            //Example Create
            Profile Client = new Profile("Tyler", "J", "Rubin", 25, "625-13-3271", "04/15/1995", "9518 Lavender Star Drive",17.5f);
            Console.WriteLine("Welcome {0}", Client.firstName);
            Console.WriteLine("Your Bank Account Number is: {0}", Client.accountNumber);
            Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            Console.WriteLine("Some basic account information is: DOB: {0}, SSN: {1}, Address: {2} ", Client.birthDate, Client.socialSecurity, Client.address);
            Client.mainMenu(Client); 




        }*/
    }
}

