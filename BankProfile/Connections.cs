using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace BankProfile
{
    public class Connections
    {
        string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";
        //string sqlUpdate = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber;
        public MySqlConnection ConnectToDataBase(string sqlStatement, Profile client)
        {
            MySqlConnection conn = new MySqlConnection(ConnectionString);
            conn.Open();
            return conn;
            //MySqlCommand cmd = new MySqlCommand(sqlStatement, conn);
            //MySqlDataReader rdr = cmd.ExecuteReader();
            //conn.Close();
        }
    }
}
