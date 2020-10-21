import React, { Component } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Sparkline } from '@progress/kendo-react-charts';
import SkeletonCard from "./SkeletonCard";

//const transactions = [100,1000,10000,9000,8000,5000,9000,7000,5000,1000,2000];
//const SparkLineChartCell = (props) => <td><Sparkline data={transactions}/></td>

class TransactionGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    }
  }
  processData = (users) => {
    this.state.users.forEach((item) => {
    this.state.users.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
      return item;
    })
    return this.state.users;
  }

  transactions = [100,1000,10000,9000,8000,5000,9000,7000,5000,1000,2000,20000,21000,20000,15000,20000]
  SparkLineChartCell = (props) => <td><Sparkline data={this.transactions}/></td>

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://localhost:44358/api/TransactionTrackings')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.transaction}</td>
          <td>{user.transType}</td>
          <td>{user.time}</td>
          <td>{user.accountNumber}</td>
          <td>{user.id}</td>
        </tr>
      )
    })
  }

  render() {
    const { users, isLoading, isError } = this.state
    if (isLoading) {
      return <div> <SkeletonCard /></div>
    }

    if (isError) {
      return <div>Error</div>
    }
    return users.length > 0
      ? (
        <Grid style={{ height: '400px'}} data={users,this.processData(users)}>
            <div className="Column"></div>
                <Column field="accountNumber" title="Account Number" width="160px"/>
                <Column field="transaction" title="Transaction Amount" width="160px"/>
                <Column field="transType" title="Transaction Type" width="160px"/>
                <Column field="time" title="Time of Transaction" width="250px"/>
                <Column field="PriceHistory" width="160px" cell={this.SparkLineChartCell}title="Balance History"
                />
      </Grid>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}
export default TransactionGrid;