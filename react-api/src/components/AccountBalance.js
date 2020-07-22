import React, { Component } from "react";
import {Alert,Breadcrumb,BreadcrumbItem,Container,Row,Col,Button,
    ButtonGroup,ButtonToolbar,Form,FormGroup,FormInput,InputGroup,
    Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Navbar,
    NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,
    DropdownMenu,DropdownItem,InputGroupAddon,Collapse,
    InputGroupText} from "shards-react";
 
class AccountBalance extends Component {
  render() {
    return (
      <div>
        <Card style={{ maxWidth: "370px", backgroundColor: 'white' }}>
                      <CardHeader>ACCOUNT BALANCES</CardHeader>
                      {/*<CardImg src="https://place-hold.it/300x200" />*/}
                      <CardBody>
                        {/*<CardTitle>ACCOUNT BALANCES</CardTitle>*/}
                        <p>Your current Account Balance is: {/*<Contacts contacts={this.state.contacts}/>*/}</p>
                        
                        <div align = "center"><form onSubmit ={this.handleSubmit}>
                        <label> Deposit: 
                          <input type="text" ref={this.input}/>
                          </label>
                          <input type="submit" value="Deposit" />
                        </form>
                      </div>{/* END CONTAINER DIV CLASS*/}
                    </CardBody>
                    {/*<CardFooter>Card footer</CardFooter>*/}
                  </Card>
                  {/*<Card style={{maxHeight:"360px", maxWidth: "400px", backgroundColor: 'white'}}>
                        <CardHeader>Transaction TransHistory</CardHeader>
                        <CardImg src="https://place-hold.it/300x200" />
                        <CardBody>
                          <CardTitle>      ACCOUNT INFO      </CardTitle>
                          <p>Transactions:    <TransHistory transHistory={this.state.transHistory}/></p>
                        </CardBody>
                        <CardFooter>Card footer</CardFooter>
                    </Card>*/}
      </div>
    );
  }
}
 
export default AccountBalance;