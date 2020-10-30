import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import { Button } from '@progress/kendo-react-buttons';
import { savePDF } from '@progress/kendo-react-pdf';
import { Ripple } from '@progress/kendo-react-ripple';

//Import CSS
import 'bootstrap-4-grid/css/grid.min.css';
import '@progress/kendo-theme-material/dist/all.css';
import '../App.css';

//Import Components and Assets
import CheckingAccountNumbers from "./data_retrieval/grabCheckingAccountNumber";
import CheckingAccountBalance from './data_retrieval/grabCheckingAccountBalance';
import AccountNumbers from "./data_retrieval/grabAccountNumber";
import AccountBalance from './data_retrieval/grabAccountBalance'; 
import { DonutChartContainer } from './DonutChartContainer';
import { BarChartContainer } from './BarChartContainer';
import { GridContainer } from './GridContainer';
import TransactionGrid  from './TransactionsGridContainer';
import money from '../assets/money.svg';
import moneyPic from '../assets/money-bag.png';
const axios = require('axios'); 

//Unused Components/Imports
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import {Card} from 'react-bootstrap';
//import { Avatar } from 'antd';
//import { UserOutlined } from '@ant-design/icons';

export default class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
  }

  //State Declaration
  state = {
    accountnumber: [],
    checkingaccountnumber: [],
    balance: [],
    checkingaccountbalance: []
  }

  //Button Functions
  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }

  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog
    }, () => console.log(this.state))
  }

  componentWillMount() {
      fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
      .then(res => res.json())
      .then((data) =>  {
        this.setState({ accountnumber: data })
      })
      .catch(console.log)

      fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({checkingaccountnumber: data})
    })
    .catch(console.log)
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
  }

  render() {
    return (
    <div className="app-container container" ref={(el) => this.appContainer = el}>
      <Ripple>
        <div className="bootstrap-wrapper" style={{ backgroundColor: "#e8e8e8"}}>
          <div className="app-container container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                <center><h1>Welcome {this.props.userEmail}</h1><br></br></center>
              </div>
            </div>
            <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"dark"} text={"light"}><h4>Investment Summary</h4>
                    <div className="percentage-container">
                      <span className="percentage-number">94</span>
                      <span className="percentage-sign">%</span>
                      <p>Total Return</p>
                    </div>
                    <div className="percentage-container">
                      <span className="percentage-number">30</span>
                      <span className="percentage-sign">%</span>
                      <p>Target Return</p>
                    </div></Card>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"primary"} text={"light"}><h4>Account Summary</h4><center><img height={30} width={30} src={moneyPic}/></center>
                    <h4><CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/>
                    <AccountBalance balance ={this.state.balance}/></h4>
                    </Card>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"dark"} text={"light"}><h4>Placeholder Here</h4>
                    <div className="percentage-container">
                      <span className="percentage-number">94</span>
                      <span className="percentage-sign">%</span>
                      <p>Total Return</p>
                    </div>
                    <div className="percentage-container">
                      <span className="percentage-number">30</span>
                      <span className="percentage-sign">%</span>
                      <p>Target Return</p>
                    </div></Card>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"primary"} text={"light"}><h4>Placeholder Here</h4><center><img height={30} width={30} src={moneyPic}/></center>
                    <h4><CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/>
                    <AccountBalance balance ={this.state.balance}/></h4>
                    </Card>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"dark"} text={"light"}><h4>Placeholder Here</h4>
                    <div className="percentage-container">
                      <span className="percentage-number">94</span>
                      <span className="percentage-sign">%</span>
                      <p>Total Return</p>
                    </div>
                    <div className="percentage-container">
                      <span className="percentage-number">30</span>
                      <span className="percentage-sign">%</span>
                      <p>Target Return</p>
                    </div></Card>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                   <Card bg={"primary"} text={"light"}><h4>Placeholder Here</h4><center><img height={30} width={30} src={moneyPic}/></center>
                    <h4><CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/>
                    <AccountBalance balance ={this.state.balance}/></h4>
                    </Card>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-6">
                  <Card bg={"white"} text={"dark"}><h4>Spending Summary</h4>
                    <DonutChartContainer /></Card>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <Card bg={"white"} text={"dark"}><h4>Average Balance</h4>
                      <BarChartContainer/></Card>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <br></br><Card bg={'dark'} text={'light'}><center><h4>Transactions</h4>
                    <TransactionGrid/></center>{/*<GridContainer /></center>*/}
                    </Card></div>
                </div>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                    <br></br>
                    <Button primary={true} onClick={this.handleShare}>Share</Button>
                    <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                    <br></br><br></br>
                  </div>
                </div>
            
            {this.state.showDialog &&
              <Dialog title={"Share this report"} onClose={this.handleShare}>
                <p>Please enter the email address/es of the recipient/s.</p>
                <Input placeholder="example@progress.com" />
                <DialogActionsBar>
                  {/*<Button primary={true} onClick={this.handleShare}>Share</Button>*/}
                  <Button primary={true}><a href="mailto:arcowirexzs@gmail.com" target="_blank">Email</a></Button>
                  <Button onClick={this.handleShare}>Cancel</Button>
                </DialogActionsBar>
              </Dialog>
            }
          </div>
        </div>
      </Ripple>
      </div>
    );
  }
}