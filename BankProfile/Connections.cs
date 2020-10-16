using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace BankProfile
{
    public class MySqlConnections : IConnection
    {
        private string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";

        //string sqlUpdate = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber;
        public IDbConnection ConnectToDataBase()
        {
            MySqlConnection conn = new MySqlConnection(ConnectionString);
            conn.Open();
            return conn;
            //MySqlCommand cmd = new MySqlCommand(sqlStatement, conn);
            //MySqlDataReader rdr = cmd.ExecuteReader();
            //conn.Close();
        }

        public async Task Execute(string cmdText, IDbConnection connection)
        {
            var command = new MySqlCommand(cmdText, connection as MySqlConnection);
            Console.WriteLine("in execute");
            await command.ExecuteNonQueryAsync();
        }
    }

    public class SqlServerConnections : IConnection
    {
        private string ConnectionString = "server=165.227.58.156;user=Tyler;database=Bank;port=3306;password=jabba6789";

        //string sqlUpdate = "update UserInformation set AccountBalance = " + client.AccountBalance + " where AccountNumber = " + client.AccountNumber;
        public IDbConnection ConnectToDataBase()
        {
            MySqlConnection conn = new MySqlConnection(ConnectionString);
            conn.Open();
            return conn;
            //MySqlCommand cmd = new MySqlCommand(sqlStatement, conn);
            //MySqlDataReader rdr = cmd.ExecuteReader();
            //conn.Close();
        }

        public async Task Execute(string cmdText, IDbConnection connection)
        {
            var command = new MySqlCommand(cmdText, connection as MySqlConnection);
            //Console.WriteLine("in execute");
            await command.ExecuteNonQueryAsync();
        }
    }

    public interface IConnection : IMakeConnections, IExecuteThings
    {
    }

    public interface IMakeConnections
    {
        IDbConnection ConnectToDataBase();
    }

    public interface IExecuteThings
    {
        Task Execute(string cmdText, IDbConnection connection);
    }
}
