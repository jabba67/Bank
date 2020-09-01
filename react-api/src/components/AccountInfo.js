import React, { Component } from "react";
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
    DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
import EmailAddress from './grabEmail';
import CheckingAccountNumbers from "./grabCheckingAccountNumber";
import AccountNumbers from "./grabAccountNumber";
import App from '../App'
const axios = require('axios'); 

export default class AccountInfo extends React.Component{

  state = {
    accountnumber: [],
    checkingaccountnumber: []
  }

componentWillMount() {
    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ accountnumber: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
  .then(res => res.json())
  .then((data) =>  {
    this.setState({checkingaccountnumber: data})
  })
  .catch(console.log)

}
  render() {
    return (
      <div class = "AccountInfo">
        <center>
        <Card style={{maxHeight:"360px", maxWidth: "370px", backgroundColor: 'white'}}>
                        <CardHeader>Account Info</CardHeader>
                        <CardBody>
                          <CardTitle>      ALL ACCOUNT INFO      </CardTitle>
                          <p>Account Number:  <AccountNumbers accountnumber ={this.state.accountnumber}/></p>
                          <p>Checking Account Number:  <CheckingAccountNumbers checkingaccountnumber ={this.state.checkingaccountnumber}/></p>
                        </CardBody>
                      </Card>
        </center>
      </div>
    );
  }
}