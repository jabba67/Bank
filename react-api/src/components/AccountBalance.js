import React, { Component } from "react";
import {Container, Button, Form, FormControl,Card, CardGroup, Row,Col,Jumbotron} from 'react-bootstrap';
import { Alert } from "shards-react";
import { Table, Tag, Space } from 'antd';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Sparkline } from '@progress/kendo-react-charts';

//Import Components and Assets
import AccountBalance from './grabAccountBalance';
import CheckingAccountBalance from './grabCheckingAccountBalance';
import TransHistory from './grabTransactionHistory';
import TransactionGrid  from './TransactionsGridContainer';
import { gridData } from './data/appData';
import homeIcon from '../home-outline.svg';
import cashIcon from '../cash-outline.svg';
import successIcon from '../checked.svg';

const axios = require('axios');

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem.PriceHistory}/></td>

const processData = (data) => {
    data.forEach((item) => {
      item.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
      return item;
    })
    return data;
  }

//Unused imports


export default class AccountBalanceGet extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitWidthdraw = this.handleSubmitWidthdraw.bind(this);
    this.input = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.interval = null;
    this.interval2 = null;
    this.showAlert = this.showAlert.bind(this);
    this.showAlert2 = this.showAlert2.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.clearInterval = this.clearInterval.bind(this);
    this.handleTimeChange2 = this.handleTimeChange2.bind(this);
    this.clearInterval2 = this.clearInterval2.bind(this);
  }

  state = {
    balance: [],
    checkingaccountbalance: [],
    transHistory: [],
    visible: false,
    countdown: 0,
    timeUntilDismissed: 3,
    visible2: false,
    countdown2: 0,
    timeUntilDismissed2: 3
  }

  showAlert() {
    this.clearInterval();
    this.setState({ visible: true, countdown: 0, timeUntilDismissed: 3 });
    this.interval = setInterval(this.handleTimeChange, 1000);
  }

  showAlert2() {
    this.clearInterval2();
    this.setState({ visible2: true, countdown2: 0, timeUntilDismissed2: 3 });
    this.interval2 = setInterval(this.handleTimeChange2, 1000);
  }

  handleTimeChange() {
    if (this.state.countdown < this.state.timeUntilDismissed - 1) {
      this.setState({
        ...this.state,
        ...{ countdown: this.state.countdown + 1 }
      });
      return;
    }

    this.setState({ ...this.state, ...{ visible: false } });
    this.clearInterval();
    setInterval(window.location.reload(false), 5000);
  }

  clearInterval() {
    clearInterval(this.interval);
    this.interval = null;
  }

  handleTimeChange2() {
    if (this.state.countdown < this.state.timeUntilDismissed - 1) {
      this.setState({
        ...this.state,
        ...{ countdown: this.state.countdown + 1 }
      });
      return;
    }

    this.setState({ ...this.state, ...{ visible: false } });
    this.clearInterval2();
    setInterval(window.location.reload(false), 5000);
  }

  clearInterval2() {
    clearInterval(this.interval2);
    this.interval2 = null;
  }

  handleSubmit(event) {
    event.preventDefault();
    var accountBalance = this.state.balance.accountBalance;
    var CheckingAccountBalance = this.state.checkingaccountbalance.checkingAccountBalance;
    var current = this.state.balance.accountBalance;
    var CurrentChecking = this.state.checkingaccountbalance.checkingAccountBalance;

    if((parseInt(this.input.current.value) > 0))
    {
      accountBalance = (parseInt(this.input.current.value)+ current);
    }
    if((parseInt(this.input2.current.value) > 0))
    {
      CheckingAccountBalance = ((parseInt(this.input2.current.value)+ CurrentChecking));
    }

    axios({
      method: 'PATCH',
      url: `https://localhost:44358/api/UserInformations/${this.props.userEmail}`,
      data: {
        EmailAdress: this.props.userEmail,
        AccountBalance: accountBalance,
        CheckingAccountBalance: CheckingAccountBalance
      }
    });
  }

  handleSubmitWidthdraw(event) {
    event.preventDefault();
    var accountBalance = this.state.balance.accountBalance;
    var CheckingAccountBalance = this.state.checkingaccountbalance.checkingAccountBalance;
    var current = this.state.balance.accountBalance;
    var CurrentChecking = this.state.checkingaccountbalance.checkingAccountBalance;

    if((parseInt(this.input3.current.value) > 0))
    {
      accountBalance = ((parseInt(this.input3.current.value)*-1)+ current);
    }
    if((parseInt(this.input4.current.value) > 0))
    {
      CheckingAccountBalance = ((parseInt(this.input4.current.value)*-1)+ CurrentChecking);
    }

    axios({
      method: 'PATCH',
      url: `https://localhost:44358/api/UserInformations/${this.props.userEmail}`,
      data: {
        EmailAdress: this.props.userEmail,
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
      <div className="bootstrap-wrapper">
          <div className="app-container2 container">
          <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                <h5>ACCOUNT BALANCES</h5>
                  <img height={25} width={50}  src={homeIcon}/>Main Account Balance: <AccountBalance balance ={this.state.balance}/><br></br>
                  <img height={25} width={50}  src={cashIcon}/>Checking Account Balance: <CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/><br></br>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                <h5> DEPOSIT TO ACCOUNTS</h5>
                  <div align = "center"><form onSubmit ={this.handleSubmit}>
                    <Form.Label>   Deposit to Main Account: 
                      <br></br><input type="text" ref={this.input}  placeholder="        Main Account" />
                    </Form.Label><br></br><br></br>
                      <label> Deposit to Checking Account: 
                        <br></br><input type="text" ref={this.input2}  placeholder="     Checking Account" />
                      </label><br></br>
                      <Alert className="mb-2" open={this.state.visible} theme="success" fade={true}>
                      <img height={25} width={50}  src={successIcon}/>Deposit Success! This message will dissapear in {" "}
                        {this.state.timeUntilDismissed - this.state.countdown} seconds!
                      </Alert>
                      <input type="submit" value="Deposit" onClick={this.showAlert} />
                    </form>
                  </div><br></br>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                <h5> WIDTHDRAW FROM ACCOUNTS</h5>
                  <div align = "center"><form onSubmit ={this.handleSubmitWidthdraw}>
                    <Form.Label>   Withdraw from Main Account: 
                      <br></br><input type="text" ref={this.input3}  placeholder="        Main Account" />
                    </Form.Label><br></br><br></br>
                      <label> Withdraw from Checking Account: 
                        <br></br><input type="text" ref={this.input4}  placeholder="     Checking Account" />
                      </label><br></br>
                      <Alert className="mb-2" open={this.state.visible2} theme="success" fade={true}>
                      <img height={25} width={50}  src={successIcon}/>Withdraw Success! This message will dissapear in {" "}
                        {this.state.timeUntilDismissed2 - this.state.countdown2} seconds!
                      </Alert>
                      <input type="submit" value="Withdraw" onClick={this.showAlert2} />
                    </form>
                  </div><br></br>
                </div>
                </div>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                    <h5>RECENT TRANSACTIONS:</h5>
                    <center>
                      <TransactionGrid/>
                    </center>
                  </div>
                </div>
            </div>
        </div>
        </div>
    );//End Return
  }
}