import React, { Component, useState, useEffect, Image, ImageBackground, useReducer } from 'react';

//const signUp = () => {
class signUp extends React.Component{
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // constructor() {
    //     this.handleemailChange = this.handleemailChange.bind(this)
    //     this.handlepasswordChange = this.handlepasswordChange.bind(this)
    // }

    state = {
     email: "",
     password: ""   
    }

    handleemailChange(event){
        //setEmail(event.target.value)
        this.setState(event.target.value)
    }

    handlepasswordChange = (event) => {
        //setPassword(event.target.value)
        this.setState(event.target.value)
    }

    addAccount = (event) => {
        event.preventDefault();
        console.log(this.email);
        console.log(this.password);
    }
    
    render(){
        return (
            <><div>
                <form>
                    {/* <label>Enter email: */}
                        <input 
                        value={this.email} 
                        onChange={this.handleemailChange}
                        />
                        <input 
                        value={this.password} 
                        onChange={this.handlepasswordChange}
                        />
                        {/* <label/> */}
                        <button type="submit">submit</button>
                </form>
            </div></>
        );
    }
}

export default signUp