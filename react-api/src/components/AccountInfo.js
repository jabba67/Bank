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
import moneySign from '../moneySign.png'
import bankCover from '../bankCover.jpg'
const axios = require('axios'); 

export default class AccountInfo extends React.Component{

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
      <div class = "AccountInfo">
        <Container fluid={true} align="justified">
          <Row className="justify-content-center py-4">
            <Col md={3} sm={12}>
              <Card 
                bg={"transparent"}
                text={'light'}
                border={"transparent"}
              >
                <Card.Img variant="top" src={bankCover} />
                <Card.Body>
                  <Card.Title> <Avatar 
                    style={{
                      verticalAlign: 'middle',
                    }}
                  >
                    <img height={30} width={30} src ={moneySign} /></Avatar> ALL ACCOUNT INFO      </Card.Title>
                      <p>Account Number:  <AccountNumbers accountnumber ={this.state.accountnumber}/></p>
                      <p>Checking Account Number:  <CheckingAccountNumbers checkingaccountnumber ={this.state.checkingaccountnumber}/></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
                  </div>
    );
  }
}