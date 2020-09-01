import React, { Component } from "react";
import {Alert,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
import AccountBalance from './grabAccountBalance';
import CheckingAccountBalance from './grabCheckingAccountBalance';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TransHistory from './grabTransactionHistory';
import { Tab } from "@material-ui/core";
const axios = require('axios');



export default class AccountBalanceGet extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  state = {
    balance: [],
    checkingaccountbalance: [],
    transHistory: [],
  }

  handleSubmit(event) {
    event.preventDefault();
    var accountBalance;
    var CheckingAccountBalance = this.state.checkingaccountbalance.checkingAccountBalance;
    var current = this.state.balance.accountBalance;
    var CurrentChecking = this.state.checkingaccountbalance.checkingAccountBalance;
    console.log('the value of account balance rn is: ' + this.state.balance.accountBalance);
    console.log('the value of checking account balance rn is: ' + this.state.checkingaccountbalance.checkingAccountBalance);
    accountBalance = (parseInt(this.input.current.value)+ this.state.balance.accountBalance);
    //CheckingAccountBalance = (parseInt(this.input.CurrentChecking.value)+ this.state.checkingaccountbalance.checkingAccountBalance);
    console.log('the value of AccountBalance rn is: ' + accountBalance);
    console.log('the value of Checking Account Balance rn is: ' + CheckingAccountBalance);
    console.log('the value of email rn is: ' + this.props.userEmail);

    alert("New Account Balances: Main Account Balance: " + accountBalance + " Checking Account Balance: " + CheckingAccountBalance);
    window.location.reload(false);

    axios({
      method: 'PATCH',
      url: `https://localhost:44358/api/UserInformations/${this.props.userEmail}`,
      data: {
        EmailAdress: this.props.userEmail, //"arcowirexzs@gmail.com",
        AccountBalance: accountBalance,
        CheckingAccountBalance: CheckingAccountBalance
      }
    });
  }

  componentDidMount() {
    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ balance: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ checkingaccountbalance: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/TransactionTrackings/45505`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ transHistory: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div class = "AccountBalance" style={{ backgroundColor: 'transparent'}}>
      <Container className="dr-example-container">
        <Row>
          <Col>
            <Card style={{ maxHeight: "500px", backgroundColor: 'white' }}>
              <CardHeader >ACCOUNT BALANCES</CardHeader>
              <CardBody>
                  <p>Your current Account Balance is: <AccountBalance balance ={this.state.balance}/></p>
                  <p>Your current Checking Account Balance is: <CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/></p>
                  <div align = "center"><form onSubmit ={this.handleSubmit}>
                      <label> Deposit to account: 
                        <input type="text" ref={this.input}/>
                      </label>
                      <input type="submit" value="Deposit" />
                  
                      {/*<label> Deposit to checking account: 
                        <input type="text" ref={this.input}/>
                      </label>
                      <input type="submit" value="Deposit" />*/}
                      </form>
                  </div>
                  <br></br>
              </CardBody>
            </Card>
          </Col> 
          <Col>
            <Card style={{ maxHeight: "500px", backgroundColor: 'white' }}>
            <CardHeader>Account Transaction History:</CardHeader>
              <CardBody>
                  <center><div class = "ScrollBox">
                      <TransHistory transHistory = {this.state.transHistory}/>
                  </div></center>
              </CardBody>  
            </Card>
          </Col> 
        </Row>
        <br></br>
        <Row>
          <Col></Col>
          <Col>
          <Card style={{ maxWidth: "1000px", backgroundColor: 'white' }}>
          <CardHeader>Experimental Table:</CardHeader>
              <CardBody >
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      
                      <th>Account Number </th><Tab></Tab>
                      <th>Transaction Time </th><Tab></Tab>
                      <th>Amount </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td><Tab></Tab>
                      <td>Otto</td><Tab></Tab>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Jacob</td><Tab></Tab>
                      <td>Thornton</td><Tab></Tab>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td colSpan="1">Larry the Bird</td><Tab></Tab>
                      <td>@twitter</td><Tab></Tab>
                      <td>@instagram</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>  
            </Card>
          </Col>
          <Col></Col>
        </Row>
        </Container>
      </div>
    );
  }
}