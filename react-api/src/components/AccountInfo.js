/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Avatar } from 'antd';
import { savePDF } from '@progress/kendo-react-pdf';

// Import CSS
import 'bootstrap-4-grid/css/grid.min.css';
import '@progress/kendo-theme-material/dist/all.css';
import '../App.css';

// Import Components and Assets
import CheckingAccountNumbers from './data_retrieval/grabCheckingAccountNumber';
import AccountNumbers from './data_retrieval/grabAccountNumber';
import moneySign from '../assets/moneySign.png';
import bankCover from '../assets/bankCover.jpg';

// Unused Imports
// import { UserOutlined } from '@ant-design/icons';
// import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
// import { Input } from '@progress/kendo-react-inputs';
// import { Button } from '@progress/kendo-react-buttons';
// import { Ripple } from '@progress/kendo-react-ripple';
// import { DonutChartContainer } from './DonutChartContainer';
// import { BarChartContainer } from './BarChartContainer';
// const axios = require('axios');

export default class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    /* this.state = {
      showDialog: false
    } */
    this.state = {
      accountnumber: [],
      checkingaccountnumber: [],
    };
  }

  componentWillMount() {
    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ accountnumber: data });
      })
      .catch(console.log);

    fetch(`https://localhost:44358/api/UserInformations/${this.props.userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ checkingaccountnumber: data });
      })
      .catch(console.log);
  }

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }

  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="AccountInfo">
        <Container fluid align="justified">
          <Row className="justify-content-center py-4">
            <Col md={3} sm={12}>
              <Card
                bg="transparent"
                text="light"
                border="transparent"
              >
                <Card.Img variant="top" src={bankCover} />
                <Card.Body>
                  <Card.Title>
                    {' '}
                    <Avatar
                      style={{
                        verticalAlign: 'middle',
                      }}
                    >
                      <img height={30} width={30} src={moneySign} />
                    </Avatar>
                    {' '}
                    ALL ACCOUNT INFO
                  </Card.Title>
                  <p>
                    Account Number:
                    <AccountNumbers accountnumber={this.state.accountnumber} />
                  </p>
                  <p>
                    Checking Account Number:
                    <CheckingAccountNumbers checkingaccountnumber={this.state.checkingaccountnumber} />
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
