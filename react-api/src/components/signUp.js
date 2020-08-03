// import React, { Component, useState, useEffect, Image, ImageBackground, useReducer } from 'react';
import React, {useState} from 'react'
import axios from 'axios'

const SignUp = () => {
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


    // constructor() {
    //     this.handleemailChange = this.handleemailChange.bind(this)
    //     this.handlepasswordChange = this.handlepasswordChange.bind(this)
    // }

    // state = {
    //  email: "",
    //  password: ""   
    // }

   const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
        // this.state.email = event.target.value
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
        // this.state.password(event.target.value)
    }

    const handleFnameChange = (event) => {
        console.log(event.target.value)
        setfirstName(event.target.value)
        // this.state.password(event.target.value)
    }
    
    const handleLnameChange = (event) => {
        console.log(event.target.value)
        setlastName(event.target.value)
        // this.state.password(event.target.value)
    }
    
    const handleAgeChange = (event) => {
        console.log(event.target.value)
        setAge(event.target.value)
        // this.state.password(event.target.value)
    }

    const handleBdayChange = (event) => {
        console.log(event.target.value)
        setbirthDate(event.target.value)
        console.log(birthDate.length)
        // if(birthDate.length == 7)
        
        // this.state.password(event.target.value)
    }

    const handleSSChange = (event) => {
        console.log(event.target.value)
        setsocialSecurity(event.target.value)
        // this.state.password(event.target.value)
    }

    const handleAddressChange = (event) => {
        console.log(event.target.value)
        setAddress(event.target.value)
        // this.state.password(event.target.value)
    }

    
    const handlePhoneNumChange = (event) => {
        console.log(event.target.value)
        setphoneNumber(event.target.value)
        // this.state.password(event.target.value)
    }
    
    /*const handleAccountNumChange = (event) => {
        console.log(event.target.value)
        setAccountNumber(event.target.value)
        // this.state.password(event.target.value)
    }*/

    
    const handleBalanceChange = (event) => {
        console.log(event.target.value)
        setBalance(event.target.value)
        // this.state.password(event.target.value)
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
        if(birthDate.length !== 10){
            alert("wrong birthday dumbass")
            setbirthDate("")
            return
        }

        if(socialSecurity.length !== 9){
            alert("invalid social security")
            setsocialSecurity("")
            return
        }

        if(phoneNumber.length !==10) {
            alert("invalid phone number")
            setphoneNumber("")
            return
        }
        // setbirthDate(birthDate.slice(0, 2) + '/' + birthDate.slice(2, 4) + '/' + birthDate.slice(4))

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

        //console.log(accountObject)

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
                "AccountNumber": Math.floor(Math.random() * 99999-10000),
                "Password": String(password)
            }
          });
        /*axios
            .post('https://localhost:5001/api/UserInformations', accountObject)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('fail')
            })*/
    }
    
    // render(){
        return (
            <><div>
                <form onSubmit={addAccount}>
                        <label>Email:
                        <input 
                        value={email} 
                        onChange={handleEmailChange}
                        />
                        </label>
                        <br></br>
                        <label>Password:
                        <input 
                        value={password}
                        onChange={handlePasswordChange}
                        />
                        </label>
                        <br></br>
                        <label>First Name:
                        <input 
                        value={firstName}
                        onChange={handleFnameChange}
                        />
                        </label>
                        <br></br>
                        <label>Last Name:
                        <input 
                        value={lastName}
                        onChange={handleLnameChange}
                        />
                        </label>
                        <br></br>
                        <label>Age:
                        <input 
                        value={age}
                        onChange={handleAgeChange}
                        />
                        </label>
                        <br></br>
                        <label>Birthday:
                        <input 
                        placeholder="MM/DD/YYYY"
                        value={birthDate}
                        onChange={handleBdayChange}
                        />
                        </label>
                        <br></br>
                        <label>Social Security:
                        <input 
                        value={socialSecurity}
                        onChange={handleSSChange}
                        />
                        </label>
                        <br></br>
                        <label>Address:
                        <input 
                        value={address}
                        onChange={handleAddressChange}
                        />
                        </label>
                        <br></br>
                        <label>Phone Number:
                        <input 
                        value={phoneNumber}
                        onChange={handlePhoneNumChange}
                        />
                        </label>
                        <br></br>
                        {/*<label>Account Number:
                        <input 
                        value={accountNumber}
                        onChange={handleAccountNumChange}
                        />
                        </label>*/}
                        <br></br>
                        <label>Account Balance:
                        <input 
                        value={balance}
                        onChange={handleBalanceChange}
                        />
                        </label>
                        <br></br>
                        <button type="submit">submit</button>
                </form>
            </div></>
        );
    // }
}

export default SignUp