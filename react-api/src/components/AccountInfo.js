import React, { Component } from "react";
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
    DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
import AccountNumbers from './grabAccountNumber';
import App from '../App'
const axios = require('axios'); 

class AccountInfo  extends React.Component{

state = {
    datas: [],
}

componentDidMount() {
    fetch(`https://localhost:44358/api/UserInformations/45505`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ contacts: data })
    })
    .catch(console.log)
}

  render() {
    return (
    <>
      <div>
        
        <Card style={{maxHeight:"360px", maxWidth: "370px", backgroundColor: 'white'}}>
                        <CardHeader>Account Info</CardHeader>
                        {/*<CardImg src="https://place-hold.it/300x200" />*/}
                        <CardBody>
                          {/*<CardTitle>      ACCOUNT INFO      </CardTitle>*/}
                          <p>Account Number:    {this.state.datas}</p>
                        </CardBody>
                        {/*<CardFooter>Card footer</CardFooter>*/}
                      </Card>
        
      </div>
    </>
    );
  }
}
 
export default AccountInfo;