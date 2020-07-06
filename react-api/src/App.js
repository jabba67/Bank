//./src/App.js';
import React, {Component} from 'react';
import Contacts from './components/contacts';

    class App extends Component {

      state = {
        contacts: []
      }
      
      componentDidMount() {
        fetch('https://localhost:44358/api/UserInformations')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }


      render() {
        return (
          <React.Fragment>
          <form>
            <label>Account</label>
          </form>
          <Contacts contacts={this.state.contacts} />
          </React.Fragment>
        )
      }
    } 

    export default App;