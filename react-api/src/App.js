import React, { Component, useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
//import {BrowserRouter as Router,Route,Redirect,Switch, Link} from 'react-router-dom';
import Contacts from './components/contacts';

const firebaseApp = firebase.initializeApp(firebaseconfig);

//Console testing for API data
const element = fetch("https://localhost:44358/api/UserInformations")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data[0].accountNumber));
//Console testing

class App extends Component{
  
  getVal(){
    var dataa = [];
    var conv;
    const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then(response => dataa.push(response))
      .then(console.log('the result is', dataa))
      conv = JSON.stringify(dataa)
      return conv;
  }


  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://localhost:44358/api/UserInformations')
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ contacts: data })
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
          <img src="https://media.giphy.com/media/9P3DSO2FzzvWxDtdWP/giphy.gif"/>
          {
            user
              ? <p>Hello, |{this.getVal()}|{user.displayName}<Contacts contacts={this.state.contacts} />
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