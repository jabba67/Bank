/* eslint-disable linebreak-style */
// @flow

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './App.css';

import { Button, Card, CardColumns } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AnimateOnChange } from 'react-animation';
import Particles from 'react-particles-js';
import firebaseconfig from './firebaseconfig';

// Component and Asset Imports
import AccountBalance from './components/AccountBalance';
import AccountInfo from './components/AccountInfo';
import Dashboard from './components/Dashboard';
import Footer from './Footer';
import GoogleSignIn from './assets/googleLogin.png';
import TitanBankDraft1 from './assets/TitanBankDraft3.png';
import SignUp from './components/signUp';
import creditIcon from './assets/card3.svg';
import account from './assets/account4.svg';
import contract from './assets/contract.svg';
import savings from './assets/savings.svg';
import loans from './assets/loans.svg';
import investment from './assets/investment.svg';

// Not Being Used
// import TransHistory from './components/grabTransactionHistory';
// import signUp from './components/signUp';
// import TestLoadThis from './components/TestLoadFunction';
// import {CardHeader,CardTitle,CardImg,CardBody,CardFooter} from "shards-react";
// const axios = require('axios');
// import depositIcon from './assets/deposit.svg';

const firebaseApp = firebase.initializeApp(firebaseconfig);

class App extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
    // this.handlelogIn = this.handlelogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    // contacts: [],
    // datas: [],
    // transHistory: [],
    // account: ' ',
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  handleChange(event) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ account: event.target.value });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      // signInAnonymously,
      // signInWithEmailAndPassword,
      // signInWithFacebook,
      // classes,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {
            user
              ? (
                <>
                  <Container className="p-0" fluid>
                    <Router>
                      <Navbar bg="transparent" variant="dark" expand="lg">
                        <Navbar.Brand>Titan Bank</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbar-toggle">
                          <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            {/* <Link className = "nav-link" to ="/AccountInfo">Account Info</Link> */}
                            <Link className="nav-link" to="/AccountBalance">Account Balance </Link>
                            <Button variant="outline-primary" size="sm" onClick={signOut}>Sign Out</Button>
                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>
                      <br />
                      <Route path="/" exact render={(props) => <Dashboard {...props} userEmail={user.email} />} />
                      <Route path="/AccountBalance" exact render={(props) => <AccountBalance {...props} userEmail={user.email} />} />
                      <Route path="/AccountInfo" exact render={(props) => <AccountInfo {...props} userEmail={user.email} />} />
                    </Router>
                    <br />
                    <Footer />
                  </Container>
                </>
              )

              : (
                <div className="SignIn">
                  <Particles
                    canvasClassName="example"
                    height={this.state.height}
                    width={this.state.width}
                    params={{
                      particles: {
                        number: {
                          value: 50,
                        },
                        size: {
                          value: 3,
                        },
                      },
                      interactivity: {
                        events: {
                        /* "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            } */
                        },
                      },
                      color: {
                        value: 'black',
                      },
                    }}
                  />
                  <Card border="white" style={{ backgroundColor: 'white', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                    <center><img height={310} width={745} alt="Titan Bank Logo" src={TitanBankDraft1} /></center>
                    <Card.Body>
                      <AnimateOnChange animationIn="popIn" animationOut="popOut">
                        <img height={62} width={257} alt="Sign in With Google button" src={GoogleSignIn} onClick={signInWithGoogle} />
                      </AnimateOnChange>
                      <br />
                      <br />
                      <label> Don't Have An Account? </label>
                      <Router>
                        <a href="/signUp"> Sign Up Here!</a>
                        <Route path="/signUp" exact render={(props) => <SignUp />} />
                      </Router>
                    </Card.Body>
                  </Card>
                  <CardColumns style={{
                    backgroundColor: 'white', border: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5,
                  }}
                  >
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Account Management Icon" src={account} />
                      <Card.Body>
                        <Card.Title>Account Management</Card.Title>
                        <Card.Text>
                          All accounts are displayed clearly in one place.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Savings Management Icon" src={savings} />
                      <Card.Body>
                        <Card.Title>Savings Management</Card.Title>
                        <Card.Text>
                          Saving money has never been easier with our modern
                          implementation of saving methods!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Card Management Icon" src={creditIcon} />
                      <Card.Body>
                        <Card.Title>Card Management</Card.Title>
                        <Card.Text>
                          Users will never lose track of their cards balance.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Loans Management Icon" src={loans} />
                      <Card.Body>
                        <Card.Title>Loans</Card.Title>
                        <Card.Text>
                          We enable our users to track loans and apply for new ones instantly.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Contracts Management Icon" src={contract} />
                      <Card.Body>
                        <Card.Title>Contracts</Card.Title>
                        <Card.Text>
                          All contracts signed between the user and the bank feature online
                          signatures to let the user avoid unnecessary visits to the bank.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card border="white" style={{ width: '18rem' }}>
                      <img height={50} width={50} alt="Investment Management Icon" src={investment} />
                      <Card.Body>
                        <Card.Title>Investment Mangement</Card.Title>
                        <Card.Text>
                          Our bank provides investment insights for clients to see the performance
                          and make decisions based on frequently updated information.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardColumns>
                </div>
              )
          }
        </header>
      </div>
    );// End of Return
  }// End of Render()
}// End Class App
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
