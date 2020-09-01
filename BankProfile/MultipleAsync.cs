using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BankProfile
{
    public class MultipleAsync
    {
        public async Task TestingAsyncMethods(Double AccountBalInitial)
        {
            Console.WriteLine("We are in the first funciton now:");
            double AccountBefore = AccountBalInitial;
            //AccountBefore = (AccountBefore * 0)
            AccountBefore = await TransformAccountBalance(AccountBefore);
        }
        
        public static async Task<double> TransformAccountBalance(double AccountBal)
        {
            Console.WriteLine("Transforming Account Balance");
            AccountBal = AccountBal + 100;
            await Task.Delay(1000);
            Console.WriteLine("Account Balance has been transformed: {0}", AccountBal);

            return 0;
        }
        public static Task<double> TransformAccountBalanceNum2(double AccountBal) //Returns task w/ out async or await
        {
            Console.WriteLine("Transforming Account Balance");
            AccountBal = AccountBal + 100;
            Console.WriteLine("Account Balance has been transformed: {0}", AccountBal);
            return Task.FromResult(0.0);
        }

        public static async Task<double> TransformAccountBalanceNum3(double AccountBal)
        {
            Console.WriteLine("Transforming Account Balance");
            AccountBal = AccountBal + 100;
            var t = Task.Delay(5000);
            var t2 = Task.Delay(1000);
            await Task.WhenAll(t, t2);
            Console.WriteLine("Account Balance has been transformed: {0}", AccountBal);

            return 0;
        }

    }
}
