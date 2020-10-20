import React, { useState, useEffect, useRef } from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AnimateOnChange } from 'react-animation'
import Particles from 'react-particles-js';

//Component and Asset Imports
import AccountBalance from './components/AccountBalance';
import AccountInfo from './components/AccountInfo';
import Dashboard from './components/Dashboard';
import GoogleSignIn from './googleLogin.png'
import TitanBankDraft1 from './TitanBankDraft3.png'
import SignUp from './components/signUp';

//Not Being Used
//import TransHistory from './components/grabTransactionHistory';
//import signUp from './components/signUp';
//import TestLoadThis from './components/TestLoadFunction';
//import {CardHeader,CardTitle,CardImg,CardBody,CardFooter} from "shards-react";

const firebaseApp = firebase.initializeApp(firebaseconfig);
const axios = require('axios');

class App extends React.Component{
  constructor() {
    super();
    this.input = React.createRef();
    this.handlelogIn = this.handlelogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    contacts: [],
    datas: [],
    transHistory: [],
    account: " ",
    testFunction: {
      title: 'Testing This',
    },
    width: 0,
    height: 0,
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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      classes,
    } = this.props;
    return (
      <div className="App" >
        <header className="App-header">
          {
            user
              ? 
              <>
                <Container className = "p-0" fluid = {true}>
                  <Router>
                  <Navbar bg = "transparent" variant="dark" expand="lg">
                    <Navbar.Brand>Titan Bank</Navbar.Brand>
                    <Navbar.Toggle className = "border-0" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbar-toggle">
                      <Nav className = "mr-auto">
                        <Link className = "nav-link" to ="/">Home</Link>
                        <Link className = "nav-link" to ="/AccountInfo">Account Info</Link>
                        <Link className = "nav-link" to ="/AccountBalance">Account Balance </Link>
                        <Button variant="outline-primary" size = "sm" onClick={signOut}>Sign Out</Button>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                  <br></br>
                      <Route path = "/" exact render={(props) => <Dashboard {...props} userEmail = {user.email}/>} />
                      <Route path="/AccountBalance" exact render ={(props) => <AccountBalance {...props} userEmail = {user.email}/>}/>
                      <Route path="/AccountInfo" exact render ={(props) => <AccountInfo {...props} userEmail = {user.email}/>} />
                    </Router>
                  </Container>
              </>
            : <div class = "SignIn">
                <Particles
                  canvasClassName="example"
                  height={this.state.height}
                  width={this.state.width}
                  params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            /*"onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }*/
                        }
                    },
                    "color": {
                      "value": "black"
                  },
                }} />
              <Card style={{ backgroundColor: 'white'}}>
                  <img src ={TitanBankDraft1}/>
                  <Card.Body>
                  <AnimateOnChange animationIn="popIn" animationOut="popOut">
                      <img height={62} width={257} src ={GoogleSignIn} onClick = {signInWithGoogle}/>
                  </AnimateOnChange>
                    <br></br><br></br>
                    <label> Don't Have An Account? </label>
                      <Router>
                        <a href="/signUp"> Sign Up Here</a>
                        <Route path = "/signUp" exact render={(props) =><SignUp/>} />
                      </Router>
                  </Card.Body>
              </Card>
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