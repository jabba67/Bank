import React, { Component, useState, useEffect, Image, ImageBackground, useReducer, Alert, Toast } from 'react';
import {Route,HashRouter, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import {Breadcrumb,BreadcrumbItem,Row,Container, Col,Button,
  ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
  Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
  NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
  DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
  InputGroupText, Label} from "shards-react";
import TransHistory from './components/grabTransactionHistory';
import AccountBalance from './components/AccountBalance';
import AccountInfo from './components/AccountInfo';
import signUp from './components/signUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';

const firebaseApp = firebase.initializeApp(firebaseconfig);

const axios = require('axios');

class App extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.handlelogIn = this.handlelogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    contacts: [],
    datas: [],
    transHistory: [],
    account: " "
  }

  handlelogIn(event) {
    event.preventDefault();
    console.log(this.state.acount) 
    axios.get(`https://localhost:44358/api/UserInformations/${this.state.account}`)
    .then(response => {
      console.log(response.data)
      this.setState({ datas: response.data})
      this.setState({ contacts: response.data})
      console.log(this.state.datas)
    })
    .then(
      this.props.signInWithGoogle()
    )
  }

  handleChange(event){
    this.setState({ account: event.target.value  })
    console.log(this.state.account)
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.input.current.value);
    var accountBalance;
    var current = this.state.contacts.accountBalance;
    console.log('the value of contacts rn is: ' + this.state.contacts.accountBalance);
    accountBalance = (parseInt(this.input.current.value)+ this.state.contacts.accountBalance);

    axios({
      method: 'PATCH',
      url: 'https://localhost:44358/api/UserInformations/45505',
      data: {
        accountBalance: accountBalance,
        accountNumber: 45505
      }
    });
      //IMPLEMENT THIS: Send request to API to get account number based on validation email
      //Then With the account number perform actions like GET and PATCH on the stored account number
  }
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App" >
        <header className="App-header">
          {
            user
              ? <>
              
              <Router>
                <Nav vertical>
                  <NavItem>
                    <li><NavLink href="/">Home</NavLink></li>
                    <Route path="/App" component={App}/> 
                    <li><NavLink href="/AccountBalance">Account Balance</NavLink></li>
                    <Route path="/AccountBalance" render ={(props) => <AccountBalance {...props} userEmail = {user.email}/>}/>
                    <li><NavLink href="/AccountInfo" >Account Info</NavLink></li>
                    <Route path="/AccountInfo" render ={(props) => <AccountInfo {...props} userEmail = {user.email}/>} />
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={signOut}>Sign Out</NavLink>
                  </NavItem>
                </Nav><br></br><br></br><br></br>
              </Router>


              {/* Need to build out dashboard here */}
              {/*<AccountInfo instance2></AccountInfo>}
              <AccountBalance instance></AccountBalance>*/}
              
          <div className="Container">  
            {/*<Container className="dr-example-container">
                <Row>
                  <Col lg="3">
                    <AccountInfo instance2></AccountInfo>
                    <br></br><br></br><br></br><br></br>
                  </Col>
                  <Col sm="12" md="4" lg="6">
                    <AccountInfo instance2></AccountInfo>
                    <br></br><br></br><br></br><br></br>
                  </Col>
                  <Col lg="3">
                    <AccountInfo instance2></AccountInfo>
                    <br></br><br></br><br></br><br></br>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    <br></br><br></br>
                    Building a dashboard out here:
                    </Col>
                  <Col sm="12" md="4" lg="6">
                    <br></br><br></br>
                    <AccountBalance instance></AccountBalance>
                    <br></br><br></br>
                  </Col>
                  <Col lg="3">
                    <br></br><br></br>
                    Building a dashboard out here:
                  </Col>
                </Row>

            </Container>*/}
              
            </div>
            </>
            : <div class = "SignIn">
                <br></br>
              <Card style={{maxHeight:"370", maxWidth: "380", backgroundColor: 'white'}}>
                  <CardHeader>Sign In</CardHeader>
                  <CardImg src="https://t3.ftcdn.net/jpg/02/20/14/38/240_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" />
                  <CardBody>
                    <label> Please Login Using Google: </label>
                    <br></br>
                    <Button size = "lg" onClick = {signInWithGoogle}>Login</Button>
                    <br></br>
                    <label> Don't Have An Account?</label>
                    <br></br>
                      <Router>
                      <a href="/signUp">Sign Up</a>
                    <Route path="/signUp" component={signUp}/>
                      </Router>
                  </CardBody>
              </Card>
              <br></br>
              </div>
          }
        </header>
      </div>
    );//End of Return
  }//End of Render()
}//End Class App

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);