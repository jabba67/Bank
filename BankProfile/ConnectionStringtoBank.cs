using System;
using System.Collections.Generic;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

public class Tutorial2
{
    /*public static void Main()
    {
        string connStr = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789"; //HostIp, UserName, DatabaseName, Port, Password
        MySqlConnection conn = new MySqlConnection(connStr);
        string Somestring;
        try
        {
            Console.WriteLine("Connecting to MySQL...");
            conn.Open();

            //string sql = "use Bank;" + "\n" + "select * from UserInformation" + "\n" + "go";
            string sql = "show databases";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            
            while (rdr.Read())
            {
                Somestring = rdr.GetString(0);
                Console.WriteLine("The Client Username is " + Somestring); //read general output
                //Console.WriteLine(rdr["Name"]); //Read by column

            }
            rdr.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
        conn.Close();
        Console.WriteLine("Done.");
    }*/
}