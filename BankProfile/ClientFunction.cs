
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace BankProfile
{
    public class ClientFunction: Profile
    {

        public static void depositMoney(Profile client)
        {
            float depositAmount;
            Console.WriteLine("Your account balance is " + client.AccountBalance);


                Console.WriteLine("How much would you like to deposit?");
                depositAmount = float.Parse(Console.ReadLine());
                client.AccountBalance += depositAmount;
                Console.WriteLine("Your account balance is now: {0}", client.AccountBalance);
                mainMenu(client);
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

        public static void displayBalance(Profile client)
        {
            Profile Client;
            Client = client;
            Console.WriteLine("Your current account balance is {0}", Client.AccountBalance);
            mainMenu(Client);
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

        public static void mainMenu(Profile client)
        {
            Profile Client;
            Client = client;
            int choice;
            //Console.WriteLine("Welcome {0}", Client.firstName);
            //Console.WriteLine("Your account balance is currently {0}", Client.accountBalance);
            Console.WriteLine("Please select an option: 1: Deposit | 2: Withdraw | 3: Account Balance | 4: Calculate Future Balance | 5: Exit Session/Return Card");
            choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    depositMoney(Client);
                    break;

                case 2:
                    //withrawMoney(Client);
                    break;

                case 3:
                    displayBalance(Client);
                    break;

                case 4:
                    //calculateInterest(Client);
                    break;

                case 5:
                    //exitSession(Client);
                    break;

            }
        }

    }
}

