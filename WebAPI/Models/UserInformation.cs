using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class UserInformation
    {
        public string FirstName { get; set; }
        public int? AccountBalance { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string BirthDate { get; set; }
        public string SocialSecurityNumber { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public double AccountNumber { get; set; }
        public string Password { get; set; }

    }

    public partial class UserInformationDeposit
    {
        public double AccountNumber { get; set; }
        public int? AccountBalance { get; set; }
    }
}
