    // src/components/contacts.js

    import React from 'react'
    import { Button } from "shards-react";

    /*const Contacts = ({ contacts }) => {
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
    };*/


    export default function OutlineButtonsExample() {
      return (
        <div className="example">
          <Button outline>Primary</Button>
          <Button outline theme="secondary">
            Secondary
          </Button>
          <Button outline theme="success">
            Success
          </Button>
          <Button outline theme="info">
            Info
          </Button>
          <Button outline theme="warning">
            Warning
          </Button>
          <Button outline theme="danger">
            Danger
          </Button>
          <Button outline theme="light">
            Light
          </Button>
          <Button outline theme="dark">
            Dark
          </Button>
        </div>
      );
    }

    //export default Contacts