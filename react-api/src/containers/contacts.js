    // src/components/contacts.js

    import React from 'react'
    //import { Button } from "shards-react";
    import { Form, FormInput, FormGroup } from "shards-react";
    import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
    //import { FormInput } from "shards-react";

    /*class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <center><label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label></center>
            <center><input type="submit" value="Submit" /></center>
            
          </form>
        );
      }}

    export default NameForm */

    const Contacts = ({ contacts }) => {
      return (
        <div>
          {contacts.map((contact, index) => (
            <div>
                <h6 class="card-title">{contact.accountNumber}</h6>
                <h6 class="card-title">{contact.firstName}</h6>
                <h6 class="card-title">{contact.accountBalance}</h6>
                <h6 class="card-title">{contact.age}</h6>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;