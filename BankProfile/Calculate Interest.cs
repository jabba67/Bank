using System;
using System.Collections.Generic;
using System.Text;

namespace BankProfile
{
    abstract class Give_Interest //Normal Customer
    {
        public Give_Interest()
        {
            //Parameterless Constructor
        }
        public abstract void ThisAbstractFunction(Profile Client);
 
        public void PrintInterest(double interest)
        {
            Console.WriteLine("Your Interest for this month is: {0}", interest); //Inbuilt C# funciton to get class name from which the method is being called
        }
    }
    class Calculate_Interest : Give_Interest, IprintInterest //High roller or Super Saver both get VIP interface
    {
        public double InterestCalculated(Profile Client)
        {
            double amountAfterInterest = 0;

            amountAfterInterest = (Client.AccountBalance * 8) + Client.AccountBalance;

            return amountAfterInterest;
        }

        public override void ThisAbstractFunction(Profile Client)
        {
            Console.WriteLine("This function was over-rided!");
            InterfaceFunction();
            PrintInterest(InterestCalculated(Client));
        }

        public void InterfaceFunction()
        {
            Console.WriteLine("This line comes from the interface!");
        }
    }

    interface IprintInterest //Vip functions
    {
        public void PrintInterest(double interest);
        public void InterfaceFunction();
    }
}
