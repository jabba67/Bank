    // src/components/contacts.js

    import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact, index) => (
            <div class="card">
                <h5 class="card-title">{contact.accountNumber}</h5>
                <h5 class="card-title">{contact.firstName}</h5>
                <h5 class="card-title">{contact.accountBalance}</h5>
                <h5 class="card-title">{contact.age}</h5>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts