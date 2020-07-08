import React, { Component, useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
//import logo from './logo.svg';
import './App.css';
import { FormInput } from "shards-react";

const firebaseApp = firebase.initializeApp(firebaseconfig);

class App extends Component{

  apiUrl = 'https://localhost:44358/api/UserInformations';

  render() {
    //const element = fetch(this.apiUrl)
    //  .then((response) => response.json())
    //  .then((data) => console.log('Here is my data returned:', data[0].accountNumber));
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (  
      <div className="App">
        <header className="App-header">
          <img src="https://media.giphy.com/media/25DE7hO60crBeE8Jlc/giphy.gif"/>
          {
            user
              ? <p>Hello, {user.displayName}
              <FormInput size="sm" placeholder="Small input" className="mb-2" />
              </p>
              : <p>Please sign in.</p>   
              
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}//End Class App

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App, App2);


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