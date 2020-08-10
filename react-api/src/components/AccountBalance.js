import React, { Component } from "react";
import {Alert,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
import AccountBalance from './grabAccountBalance';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TransHistory from './grabTransactionHistory';
const axios = require('axios');
var TMClient = require('textmagic-rest-client');

export default class AccountBalanceGet extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  state = {
    balance: [],
    transHistory: [],
  }

  handleSubmit(event) {
    event.preventDefault();
    //Alert('A name was submitted: ' + this.input.current.value);
    var accountBalance;
    var current = this.state.balance.accountBalance;
    console.log('the value of contacts rn is: ' + this.state.balance.accountBalance);
    accountBalance = (parseInt(this.input.current.value)+ this.state.balance.accountBalance);
    console.log('the value of AB rn is: ' + accountBalance);
    console.log('the value of AB rn is: ' + this.props.userEmail);
  
        var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
        c.Messages.send({text: 'test message', phones:'8583420865'}, function(err, res){
        console.log('Messages.send()', err, res);
        });

    axios({
      method: 'PATCH',
      url: `https://localhost:44358/api/UserInformations/${this.props.userEmail}`,
      data: {
        EmailAdress: this.props.userEmail, //"arcowirexzs@gmail.com",
        AccountBalance: accountBalance
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
        <Card style={{ maxWidth: "470px", backgroundColor: 'white' }}>
          <CardHeader >ACCOUNT BALANCES</CardHeader>
          <CardBody>
              <p>Your current Account Balance is: <AccountBalance balance ={this.state.balance}/></p>
              <div align = "center"><form onSubmit ={this.handleSubmit}>
                  <label> Deposit: 
                    <input type="text" ref={this.input}/>
                  </label>
                  <input type="submit" value="Deposit" />
                  </form>
              </div>
              <br></br>
              <label>Account Transaction History:</label>
              <center><div class = "ScrollBox">
                <TransHistory transHistory = {this.state.transHistory}/>
              </div></center>
          </CardBody>
        </Card>
      </div>
    );
  }
}