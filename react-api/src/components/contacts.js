    // src/components/contacts.js

    import React from 'react'
    //import { Button } from "shards-react";
    import { Form, FormInput, FormGroup } from "shards-react";
    import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
    //import { FormInput } from "shards-react";

    class NameForm extends React.Component {
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

    export default NameForm 

    /*const Contacts = ({ contacts }) => {
      return (
        <div>
        <center><FormInput valid placeholder="I'm valid" className="mb-2" /></center>;
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

    export default Contacts*/

    /* BUTTONS
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
    }*/

    /*Form Input with Username and Password
    export default function FormExample() {
      return (
        <Form>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
          </FormGroup>
        </Form>
      );
    }*/

    /*Form Input
    export default function FormInputSizeExample() {
      return (
        <div>
          <FormInput size="sm" placeholder="Small input" className="mb-2" />
          <FormInput placeholder="Normal input" className="mb-2" />
          <FormInput size="lg" placeholder="Large input" />
        </div>
      );
    }*/