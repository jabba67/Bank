import React, { Component, useState, useEffect, Image, ImageBackground } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseconfig';
import './App.css';
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,
  ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
  Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
  NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
  DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
  InputGroupText} from "shards-react";
import Contacts from './components/contacts';
import AccountNumbers from './components/grabAccountNumber';
import TransHistory from './components/grabTransactionHistory';

const firebaseApp = firebase.initializeApp(firebaseconfig);

///Console testing for API data
const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));
///Console testing

const axios = require('axios');

class App extends Component{

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

  componentDidMount() {
    fetch(`https://localhost:44358/api/UserInformations/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ contacts: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/UserInformations/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ datas: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/TransactionTrackings/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ transHistory: data })
    })
    .catch(console.log)
    
  }//End componentDidMount()

  handlelogIn(event) {
    event.preventDefault();
    console.log(this.state.ccount)
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
    
    /*axios({
      method: 'POST',
      url: 'https://localhost:44358/api/UserInformations/45505',
      data: {
        firstName: "Tyler",
        accountBalance: accountBalance,
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
                <Nav justified>
                <NavItem></NavItem>
                <NavItem></NavItem>
                  <NavItem>
                    <NavLink href="https://google.com">GOOGLE?</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={signOut}>Sign Out</NavLink>
                  </NavItem>
                  <NavItem></NavItem>
                  <NavItem>
                  </NavItem>
                </Nav><br></br><br></br>   

              <div className="Container">
                <p align = "center">Hello, {user.displayName}</p>
                <Container className="dr-example-container"style={{ backgroundColor: 'transparent'}} align = "center" maxHeight ="500px" maxWidth = "350px" >
                <Row>
                  <Col>
                  </Col>{/* END COLUMN 1 */}
                  <Card style={{maxHeight:"360px", maxWidth: "370px", backgroundColor: 'white'}}>
                        <CardHeader>Account Info</CardHeader>
                        {/*<CardImg src="https://place-hold.it/300x200" />*/}
                        <CardBody>
                          {/*<CardTitle>      ACCOUNT INFO      </CardTitle>*/}
                          <p>Account Number:    <AccountNumbers datas={this.state.datas}/></p>
                        </CardBody>
                        {/*<CardFooter>Card footer</CardFooter>*/}
                      </Card>
                  <Col></Col>
                </Row>{/* END ROW 1 */}
                <Row>
                    <Col></Col>
                    <Col sm="25" lg="30">
                    <Card style={{ maxWidth: "370px", backgroundColor: 'white' }}>
                      <CardHeader>ACCOUNT BALANCES</CardHeader>
                      {/*<CardImg src="https://place-hold.it/300x200" />*/}
                      <CardBody>
                        {/*<CardTitle>ACCOUNT BALANCES</CardTitle>*/}
                        <p>Your current Account Balance is: <Contacts contacts={this.state.contacts}/></p>
                        
                        <div align = "center"><form onSubmit ={this.handleSubmit}>
                        <label> Deposit: 
                          <input type="text" ref={this.input}/>
                          </label>
                          <input type="submit" value="Deposit" />
                        </form>
                      </div>{/* END CONTAINER DIV CLASS*/}
                    </CardBody>
                    {/*<CardFooter>Card footer</CardFooter>*/}
                  </Card>
                  {/*}
                  <Card style={{maxHeight:"360px", maxWidth: "400px", backgroundColor: 'white'}}>
                        <CardHeader>Transaction TransHistory</CardHeader>
                        <CardImg src="https://place-hold.it/300x200" />
                        <CardBody>
                          <CardTitle>      ACCOUNT INFO      </CardTitle>
                          <p>Transactions:    <TransHistory transHistory={this.state.transHistory}/></p>
                        </CardBody>
                        <CardFooter>Card footer</CardFooter>
                  </Card>*/}
                </Col>{/* END COLUMN 2 */}
                <Col></Col>
              </Row>{/* END ROW 2 */}
              </Container></div>

              </>
              : <div class = "SignIn">
                <br></br>
              <Card style={{maxHeight:"370", maxWidth: "380", backgroundColor: 'white'}}>
                  <CardHeader>Sign In</CardHeader>
                  <CardImg src="https://t3.ftcdn.net/jpg/02/20/14/38/240_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" />
                  <CardBody>
                    <form onSubmit={this.handlelogIn}>
                      <label>Enter Account Number: 
                        <br></br>
                        <input type="text"  value={this.state.account} onChange={this.handleChange}/>
                        <FormInput placeholder="Account Number" input type="submit" value="log-in" />
                      </label>
                    </form>
                  </CardBody>
              </Card>
              
              <br></br>
              </div>
          }
          {
            user
              ? <>
                </>
              : <>
                </>
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