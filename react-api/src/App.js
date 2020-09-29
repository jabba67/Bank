import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import {Button,Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter} from "shards-react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import TransHistory from './components/grabTransactionHistory';
import AccountBalance from './components/AccountBalance';
import AccountInfo from './components/AccountInfo';
import signUp from './components/signUp';
import TestLoadThis from './components/TestLoadFunction';

const firebaseApp = firebase.initializeApp(firebaseconfig);
const axios = require('axios');
const drawerWidth = 240;

class App extends React.Component{
  constructor() {
    super();
    this.input = React.createRef();
    this.handlelogIn = this.handlelogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    contacts: [],
    datas: [],
    transHistory: [],
    account: " ",
    testFunction: {
      title: 'Testing This',
    }
  }

  handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
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

  render() {
    const {
      user,
      classes,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App" >
        <header className="App-header">
          {
            user
              ? <>
                <Container className = "p-0" fluid = {true}>
                  <Router>
                  <Navbar className = "border-bottom" bg = "transparent" expand="lg">
                    <Navbar.Brand>Navigation</Navbar.Brand>

                    <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                      <Nav className = "ml-auto">
                        <Link className = "nav-link" to ="/">Home</Link>
                        <Link className = "nav-link" to ="/AccountInfo">Account Info</Link>
                        <Link className = "nav-link" to ="/AccountBalance">Account Balance</Link>
                        <Link onClick={signOut}>Sign Out</Link>
                      </Nav>
                  </Navbar.Collapse>
                  </Navbar>
                  <br></br>
                
                      <Route path = "/" exact render={(props) => <AccountInfo {...props} userEmail = {user.email}/>} />
                      <Route path="/AccountBalance" exact render ={(props) => <AccountBalance {...props} userEmail = {user.email}/>}/>
                      <Route path="/AccountInfo" exact render ={(props) => <AccountInfo {...props} userEmail = {user.email}/>} />
                    </Router>
                  </Container>
              {/* Need to build out dashboard here */}

          <div className="Container">  
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