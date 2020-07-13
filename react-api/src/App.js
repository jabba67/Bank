import React, { Component, useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import { Alert, Breadcrumb, BreadcrumbItem, Container, Row, Col, Button } from "shards-react";
import Contacts from './components/contacts';

const firebaseApp = firebase.initializeApp(firebaseconfig);

//Console testing for API data
const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));
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
              ? <p align="left">
              <Breadcrumb>
                <BreadcrumbItem>
                <a href="#">Home  |    </a>
                </BreadcrumbItem> 
                <Button theme="danger" onClick={signOut}>Logout Here</Button>
              </Breadcrumb>
              <img src="https://media.giphy.com/media/9P3DSO2FzzvWxDtdWP/giphy.gif"/>
              <p align = "center">Hello, {user.displayName}</p>

              <Container className="dr-example-container">
              <Row>
                <Col></Col>
                <Col sm="25" lg="25">
                <font face = "Verdana" size = "5">
                    Your current Account Balance is: <Contacts contacts={this.state.contacts}/> {" "}
                    </font>
                </Col>
                <Col></Col>
              </Row>
              </Container>
              
              </p>
              : <p>Please sign in.</p>   
              
          }
          {
            user
              ? <>
              <button onClick={signOut}>Sign out</button>
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

//======================================================================
/*

//./src/App.js';


//import React, {Component} from 'react';
//import React, { useState } from "react";
import Contacts from './components/contacts';

    class App2 extends Component {
      
      state = {
        contacts: []
      }
      
      componentDidMount() {
        fetch('https://localhost:44358/api/UserInformations')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }


      render() {
        return (
          <React.Fragment>
          <form>
            <label>Account</label>
          </form>
          <Contacts contacts={this.state.contacts} />
          </React.Fragment>
        )
      }
    } 

    //export default App2;*/