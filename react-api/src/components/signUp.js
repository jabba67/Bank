import React, {useState} from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//Import Components and Assets
import SignUp2 from './signUp2';
import ThankYou from './ThankYou'

//Not being used
// import React, { Component, useState, useEffect, Image, ImageBackground, useReducer } from 'react';
//import Col from 'react-bootstrap/Col';

function SignUp(){
// class signUp extends React.Component{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setAge] = useState(0)
    const [birthDate, setbirthDate] = useState("")
    const [socialSecurity, setsocialSecurity] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [accountNumber, setAccountNumber] = useState(0)
    const [balance, setBalance] = useState(0)
    const [disabled,setDisabled] = useState(false);
    const [formSent,setFormSent] = useState(null);

    const history = useHistory();

   const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleFnameChange = (event) => {
        console.log(event.target.value)
        setfirstName(event.target.value)
    }
    
    const handleLnameChange = (event) => {
        console.log(event.target.value)
        setlastName(event.target.value)
    }
    
    const handleAgeChange = (event) => {
        console.log(event.target.value)
        setAge(event.target.value)
    }

    const handleBdayChange = (event) => {
        console.log(event.target.value)
        setbirthDate(event.target.value)
        console.log(birthDate.length)
    }

    const handleSSChange = (event) => {
        console.log(event.target.value)
        setsocialSecurity(event.target.value)
    }

    const handleAddressChange = (event) => {
        console.log(event.target.value)
        setAddress(event.target.value)
    }
    
    const handlePhoneNumChange = (event) => {
        console.log(event.target.value)
        setphoneNumber(event.target.value)
    }

    const handleBalanceChange = (event) => {
        console.log(event.target.value)
        setBalance(event.target.value)
    }

    const addAccount = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        console.log(birthDate);
        console.log(socialSecurity);
        console.log(address);
        console.log(phoneNumber);
        console.log("Account Number: " + Math.floor(Math.random() * 99999-10000));
        console.log(balance);

        // validate inputs
        {if(birthDate.length < 8){
            alert("Please Enter a Correct Birthday Format")
            setbirthDate("")
            return
        }

        if(socialSecurity.length < 11){
            alert("Please Enter a Valid Social Security Number")
            setsocialSecurity("")
            return
        }

        if(phoneNumber.length !==12 || phoneNumber.length < 1) {
            alert("Please Enter a Valid Phone Number")
            setphoneNumber("")
            return
        }

        if(email.length < 1){
            alert("Please Enter a Valid Email")
            setbirthDate("")
            return
        }

        if(password.length < 1){
            alert("Please Enter a Valid Password")
            setbirthDate("")
            return
        }

        if(age == 0){
            alert("Please Enter a Valid Password")
            setbirthDate("")
            return
        }

        if(address.length < 1){
            alert("Please Enter a Valid Password")
            setbirthDate("")
            return
        }}

        const accountObject = {
            FirstName : firstName,
            AccountBalance : balance,
            LastName : lastName,
            Age: age,
            BirthDate: birthDate,
            SocialSecurityNumber: socialSecurity,
            Address: address,
            PhoneNumber: phoneNumber,
            EmailAddress: email,
            AccountNumber : accountNumber,
            Password: password
        }
        setDisabled(true)
        setFormSent(true)

        axios({
            method: 'POST',
            url: `https://localhost:44358/api/UserInformations`,
            data: {
                "FirstName": String(firstName),
                "AccountBalance": parseInt(balance),
                "LastName": String(lastName),
                "Age": parseInt(age),
                "BirthDate": String(birthDate),
                "SocialSecurityNumber": String(socialSecurity),
                "Address": String(address),
                "PhoneNumber": String(phoneNumber),
                "EmailAddress": String(email),
                "AccountNumber": Math.floor(Math.random() * (99999-10000)+10000),
                "CheckingAccountNumber": Math.floor(Math.random() * (99999-10000)+10000),
                "Password": String(password)
            }
          });
          window.location.reload(false)
    }
    
        return (
            <div>
                <br></br><Container fluid={true} bg={"transparent"}>
                <Form onSubmit={addAccount}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="name" type="text" value={firstName} onChange={handleFnameChange}  placeholder="First Name"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="name" type="text" value={lastName} onChange={handleLnameChange}  placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control name="name" type="text" value={email} onChange={handleEmailChange}  placeholder="Email"/>
                        </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="name" type="text" value={password} onChange={handlePasswordChange}  placeholder="Password"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="name" type="text" value={age} onChange={handleAgeChange}  placeholder="Age"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control name="name" type="text" value={birthDate} onChange={handleBdayChange}  placeholder="DD/MM/YYYY"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Social Security: </Form.Label>
                        <Form.Control name="name" type="text" value={socialSecurity} onChange={handleSSChange}  placeholder="Social Security"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  name="name" type="text" value={address} onChange={handleAddressChange}  placeholder="Address"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control  name="name" type="text" value={phoneNumber} onChange={handlePhoneNumChange}  placeholder="Phone Number"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label>Beginning Account Balance</Form.Label>
                        <Form.Control name="name" type="text" value={balance} onChange={handleBalanceChange}  placeholder="Beginning Account Balance"/>
                    </Form.Group>
                    <Router>
                    
                        <Button className="d-inline-block" variant="primary" type="submit" disabled={disabled} to="http://localhost:3000/">
                            Submit Application
                        </Button>
                    <Link to='/ThankYou'>
                    </Link>
                    <Route path = "/ThankYou" render={(props) =><ThankYou/>} />
                    </Router>
                        {formSent === true && <p className="d-inline success-msg"><br></br>Submit Success!</p>}
                        {formSent === false && <p className="d-inline err-msg">Form Not Sent</p>}
                        
                     
                </Form>
                </Container>
            </div>
        );
}

export default SignUp