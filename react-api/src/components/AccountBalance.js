import React, { Component } from "react";
import {Container, Button, Form, FormControl,Card, CardGroup, Row,Col,Jumbotron} from 'react-bootstrap';
import AccountBalance from './grabAccountBalance';
import CheckingAccountBalance from './grabCheckingAccountBalance';
import TransHistory from './grabTransactionHistory';
import homeIcon from '../home-outline.svg';
import cashIcon from '../cash-outline.svg';
import fundsAvailable from '../fundsAvailable.jpg';
import { Table, Tag, Space } from 'antd';

const axios = require('axios');

//import {Alert} from "shards-react";


export default class AccountBalanceGet extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.input2 = React.createRef();
  }

  state = {
    balance: [],
    checkingaccountbalance: [],
    transHistory: [],
    columns:[
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ],
    data:[
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ]
  }

  handleSubmit(event) {
    event.preventDefault();
    var accountBalance = this.state.balance.accountBalance;
    var CheckingAccountBalance = this.state.checkingaccountbalance.checkingAccountBalance;//this.state.checkingaccountbalance.checkingAccountBalance;
    var current = this.state.balance.accountBalance;
    var CurrentChecking = this.state.checkingaccountbalance.checkingAccountBalance;
    console.log('the value of account balance rn is: ' + this.state.balance.accountBalance);
    console.log('the value of checking account balance rn is: ' + this.state.checkingaccountbalance.checkingAccountBalance);

    if((parseInt(this.input.current.value) > 0))
    {
      accountBalance = (parseInt(this.input.current.value)+ current);//this.state.balance.accountBalance);
    }
    if((parseInt(this.input2.current.value) > 0))
    {
      CheckingAccountBalance = (parseInt(this.input2.current.value)+ CurrentChecking); //this.state.checkingaccountbalance.checkingAccountBalance);
    }
    
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
      <div className="bootstrap-wrapper">
          <div className="app-container container">
          <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      {/*<Container fluid={true}>
          <Row>
    <Col md={4} sm={8}>*/}
              <Card 
                bg={"transparent"}
                text={'light'}
                border={"transparent"}
              >
                {/*<Card.Img variant="top" src={fundsAvailable} />*/}
                <Card.Title>ACCOUNT BALANCES</Card.Title>
                  <Card.Body>
                    <img height={25} width={50}  src={homeIcon}/>Main Account Balance: <AccountBalance balance ={this.state.balance}/><br></br>
                    <img height={25} width={50}  src={cashIcon}/>Checking Account Balance: <CheckingAccountBalance checkingaccountbalance ={this.state.checkingaccountbalance}/><br></br>
                  </Card.Body>
                </Card></div>
                {/*</Col> 
                </Row>
                <Row>
                <Col md={4} sm={8}>*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <Card 
                bg={"transparent"}
                text={'light'}
                border={"transparent"}
              >
                <Card.Title>DEPOSIT TO ACCOUNTS</Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <div align = "center"><form onSubmit ={this.handleSubmit}>
                        <Form.Label>   Deposit to Main Account: 
                          <br></br><input type="text" ref={this.input}  placeholder="Main Account" />
                        </Form.Label><br></br>
                          <label> Deposit to Checking Account: 
                            <br></br><input type="text" ref={this.input2}  placeholder="Checking Account" />
                          </label><br></br>
                          <input type="submit" value="Deposit" />
                        </form>
                      </div><br></br>
                    </Card.Text>
                  </Card.Body>
                </Card></div>
                {/*</Col> 
                </Row>
                <Row>
                <Col md={4} sm={8}>*/}
                </div>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-12">
              <h5>ACCOUNT TRANSACTIONS:</h5>
                    <center>
                      <div class = "ScrollBox">
                        <TransHistory transHistory = {this.state.transHistory}/>
                      </div>
                    </center>
                </div></div>
               {/*} <Table columns={this.state.columns} dataSource={this.state.data} />*/}
            {/*</Col> 
          </Row>
        </Container>*/}
        </div>
        </div>
      </div>
    );//End Return
  }
}