import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from 'react-bootstrap';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
import CheckingAccountNumbers from "./grabCheckingAccountNumber";
import AccountNumbers from "./grabAccountNumber";
import { DonutChartContainer } from './DonutChartContainer';
import { BarChartContainer } from './BarChartContainer';
import { GridContainer } from './GridContainer';
import { PanelBarContainer } from './PanelBarContainer';
import moneySign from '../moneySign.png'
import bankCover from '../bankCover.jpg'
const axios = require('axios'); 

export default class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    /*this.state = {
      showDialog: false
    }*/
  }

  //State Declaration
  state = {
    accountnumber: [],
    checkingaccountnumber: []
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
  }

  render() {
    return (
    <div className="app-container container" ref={(el) => this.appContainer = el}>
      <Ripple>
        <div className="bootstrap-wrapper">
          <div className="app-container container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h1>Welcome $Name Here$</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Button primary={true} onClick={this.handleShare}>Share</Button>
                <Button onClick={this.handlePDFExport}>Export to PDF</Button>
              </div>
            </div>
            <div className="row">
              {/*<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <PanelBarContainer/>
    </div>*/}
              
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <h4>Spending Summary</h4>
                    <DonutChartContainer />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                    <h4>Investment Summary</h4>
                    <div className="percentage-container">
                      <span className="percentage-number">94</span>
                      <span className="percentage-sign">%</span>
                      <p>Total Return</p>
                    </div>
                    <div className="percentage-container">
                      <span className="percentage-number">30</span>
                      <span className="percentage-sign">%</span>
                      <p>Target Return</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h4>Average Balance</h4>
                    <BarChartContainer/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>Transactions</h4>
                    <GridContainer />
                  </div>
                 
                  </div>
            </div>
            {this.state.showDialog &&
              <Dialog title={"Share this report"} onClose={this.handleShare}>
                <p>Please enter the email address/es of the recipient/s.</p>
                <Input placeholder="example@progress.com" />
                <DialogActionsBar>
                  <Button primary={true} onClick={this.handleShare}>Share</Button>
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