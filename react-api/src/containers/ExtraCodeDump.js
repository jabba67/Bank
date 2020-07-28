/*componentDidMount() {
    console.log("happening in comp1");
    fetch(`https://localhost:44358/api/UserInformations/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ contacts: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/UserInformations/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ datas: data })
    })
    .catch(console.log)

    fetch(`https://localhost:44358/api/TransactionTrackings/${this.state.account}`)
    .then(res => res.json())
    .then((data) =>  {
      this.setState({ transHistory: data })
    })
    .catch(console.log)
  }//End componentDidMount()*/

  /*axios({
      method: 'POST',
      url: 'https://localhost:44358/api/UserInformations/45505',
      data: {
        firstName: "Tyler",
        accountBalance: accountBalance,
        lastName: "Rubin",
        age: 25,
        birthDate: "04/15/1995",
        socialSecurityNumber: "533-14-1324",
        address: "1242 Tallow Tree Lane",
        phoneNumber: "858-342-0865",
        emailAddress: "arcowirexzs@yahoo.com",
        accountNumber: 45505,
        password: "jabba678"
      }
    });*/

    /*
    <p align = "center">Hello, {user.displayName}</p>
    <Container className="dr-example-container"style={{ backgroundColor: 'transparent'}} align = "center" maxHeight ="500px" maxWidth = "350px" >
        <Row>
        <Col>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col sm="25" lg="30">
        </Col>
        <Col></Col>
        </Row>
    </Container>*/

    /*<form onSubmit={this.handlelogIn}>
        <label>Enter Account Number: 
        <br></br>
        <input type="text"  value={this.state.account} onChange={this.handleChange}/>
        <FormInput placeholder="Account Number" input type="submit" value="log-in" />
        </label>
    </form>*/

    ///Console testing for API data
    const element = fetch("https://localhost:44358/api/UserInformations/45505")
        .then((response) => response.json())
        .then((data) => console.log('Here is my data returned:', data.accountNumber));
    ///Console testing


        /*
  {Object.keys(datas).filter(key => key === 'age').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{datas[item]}</h6>
            </div>
          ))}
    */