import React, { Component, useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import { Alert, Breadcrumb, BreadcrumbItem, Container, Row, Col, Button, ButtonGroup, ButtonToolbar, FormInput, InputGroup } from "shards-react";
import Contacts from './components/contacts';
import AccountNumbers from './components/grabAccountNumber';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useStyles from './containers/displayInfo';

const firebaseApp = firebase.initializeApp(firebaseconfig);

//Console testing for API data
const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));

//<img src="https://media.giphy.com/media/9P3DSO2FzzvWxDtdWP/giphy.gif"/>
//Console testing

class App extends Component{

  state = {
    contacts: [],
    datas: []
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
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
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
                <Col sm="25" lg="30">
                <font face = "Verdana" size = "5">
                Account Number: <AccountNumbers datas={this.state.datas}/> Your current Account Balance is: <Contacts contacts={this.state.contacts}/> {" "}</font>
                </Col>
                <Col></Col>
              </Row>
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