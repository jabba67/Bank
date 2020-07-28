import React, { Component } from "react";
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
    DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
import EmailAddress from './grabEmail';
import App from '../App'
const axios = require('axios'); 

export default class AccountInfo extends React.Component{

  //Fetch account info with info (like email) passed to this component
  //Use forms for more input

  state = {
    email: [],
  }

componentWillMount() {
    fetch(`https://localhost:44358/api/UserInformations/${this.props.userName}`)
    //fetch(`https://localhost:44358/api/UserInformations/${this.route.emailer}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ email: data })
    })
    .then((console.log("happening in comp2")))
    .catch(console.log)
}
  render() {
    return (
      <div>
        <Card style={{maxHeight:"360px", maxWidth: "370px", backgroundColor: 'white'}}>
                        <CardHeader>Account Info</CardHeader>
                        <CardBody>
                          <CardTitle>      ACCOUNT INFO      </CardTitle>
                          <p>Account Number:  {this.props.userName}<EmailAddress email ={this.state.email}/></p>
                        </CardBody>
                      </Card>
        
      </div>
    );
  }
}
 
//export default AccountInfo;
//this.props.userName