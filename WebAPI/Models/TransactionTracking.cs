using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class TransactionTracking
    {
        public string Transaction { get; set; }
        public string TransType { get; set; }
        public DateTimeOffset Time { get; set; }
        public string AccountNumber { get; set; }
        public int id { get; set; }
    }
}
