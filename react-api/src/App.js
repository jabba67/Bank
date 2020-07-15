import React, { Component, useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter} from "shards-react";
import Contacts from './components/contacts';
import AccountNumbers from './components/grabAccountNumber';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useStyles from './containers/displayInfo';
import Axios from 'axios';

const firebaseApp = firebase.initializeApp(firebaseconfig);

//Console testing for API data
const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));

//<img src="https://media.giphy.com/media/9P3DSO2FzzvWxDtdWP/giphy.gif"/>
//Console testing

const axios = require('axios');

class App extends Component{

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
  }

  state = {
    contacts: [],
    datas: []
  }

  handleSubmit(event) {
    event.preventDefault();
    const accountBalance = new FormData(event.target);
    //const[accountBalance] = event.get
    
    
    axios({
      method: 'POST',
      url: 'https://localhost:44358/api/UserInformations/45505',
      data: {
        firstName: "Tyler",
        accountBalance: 4000,
        lastName: "Rubin",
        age: 25,
        birthDate: "04/15/1995",
        socialSecurityNumber: "533-14-1324",
        address: "1242 Tallow Tree Lane",
        phoneNumber: "858-342-0865",
        emailAddress: "arcowirexzs@yahoo.com",
        accountNumber: 45505,
        password: "jabba678"
      }
    });
  }

  componentDidMount() {
    fetch('https://localhost:44358/api/UserInformations/45505')
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ contacts: data })
    })
    .catch(console.log)

    fetch('https://localhost:44358/api/UserInformations/45505')
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ datas: data })
    })
    .catch(console.log)
    
    /*axios({
      method: 'POST',
      url: 'https://localhost:44358/api/UserInformations/45505',
      data: {
        firstName: "Tyler",
        accountBalance: 3000,
        lastName: "Rubin",
        age: 25,
        birthDate: "04/15/1995",
        socialSecurityNumber: "533-14-1324",
        address: "1242 Tallow Tree Lane",
        phoneNumber: "858-342-0865",
        emailAddress: "arcowirexzs@yahoo.com",
        accountNumber: 45505,
        password: "jabba678"
      }
    });*/
  }//End componentDidMount()

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      axios,
    } = this.props;
    return (  
      <div className="App">
        <header className="App-header">
         
          {
            user
              ? <>
                <img src = "https://festivalsurplus.com/wp-content/uploads/2019/10/festival_surplus_logo.png" width="200" height="50"/>
                <p align = 'right'><Button onClick={signOut}>Sign Out</Button></p>
                <img src="https://media.giphy.com/media/9P3DSO2FzzvWxDtdWP/giphy.gif"/>
                <p align = "center">Hello, {user.displayName}</p>

              <Container className="dr-example-container"style={{ backgroundColor: '#bccbcc'}}>
              <Row>
                <Col></Col>
                <Col>
                    <Card style={{ maxWidth: "300px" }}>
                      {/*<CardHeader>Card header</CardHeader>*/}
                      {/*<CardImg src="https://place-hold.it/300x200" />*/}
                      <CardBody>
                        <CardTitle>ACCOUNT INFO</CardTitle>
                        <p>Account Number: <AccountNumbers datas={this.state.datas}/></p>
                      </CardBody>
                      {/*<CardFooter>Card footer</CardFooter>*/}
                    </Card>
                </Col>{/* END COLUMN 1 */}
                <Col></Col>
              </Row>{/* END ROW 1 */}
              <Row>
                  <Col></Col>
                  <Col sm="25" lg="30">
                  <Card style={{ maxWidth: "300px" }}>
                    {/*<CardHeader>Card header</CardHeader>*/}
                    {/*<CardImg src="https://place-hold.it/300x200" />*/}
                    <CardBody>
                      <CardTitle>ACCOUNT BALANCES</CardTitle>
                      <p>Your current Account Balance is: <Contacts contacts={this.state.contacts}/></p>

                      <form onSubmit ={this.handleSubmit}>
                          <label htmlFor="accountBalance">Desposit Amount</label>
                          <input id="accountBalance" name="accountBalance" type="text" />
                          {/*<FormInput id="accountBalance" type = "text" name = "accountBalance" placeholder="Desposit Amount..." />*/}
                          <button >Deposit</button>
                      </form>

                    </CardBody>
                    {/*<CardFooter>Card footer</CardFooter>*/}
                  </Card>
                </Col>{/* END COLUMN 2 */}
                <Col></Col>
              </Row>{/* END ROW 2 */}
              </Container>
              
              </>
              : <p align = "center">Please sign in.</p>   
              
          }
          {
            user
              ? <>
              
                </>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
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