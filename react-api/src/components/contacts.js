    // src/components/contacts.js
    import React from 'react'

    const Contacts = ({ contacts }) => {
      const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));

      return (
        <div>
          {contacts.map((contact) => (
            <div>
                <h6 class="card-title">{contact.accountNumber}</h6>
                <h6 class="card-title">{contact.firstName}</h6>
                <h6 class="card-title">{contact.accountBalance}</h6>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;