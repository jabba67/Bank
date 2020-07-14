import React, { useState, useEffect } from 'react'
import useInfiniteScroll from 'use-infinite-scroll'
import superagent from "superagent";

const App = () => {
  const [ users, setUsers ] = useState([])
  const [isFetching, setIsFetching] = useInfiniteScroll(loadUsers)

  // Loads some users on initial load
  useEffect(loadUsers, [])

  function loadUsers() {
    superagent
      .get('https://randomuser.me/api/?results=50')
      .then((results) => {
        setUsers([...users, ...results.body.results])
        setIsFetching(false)
      })
      .catch((err) => {
        setIsFetching(false)
      })
  }
  console.log(users)
  return (
    <div>
      <div style={{backgroundColor: 'white',position: 'fixed', top: '0px', width: '100%'}}> Total Count: {users.length}</div>
      <ul>
        {users.map(({email}) => (
        <li key={email}>{email}</li>
      ))}
      </ul>
      {isFetching ? 'Fetching...' : 'Not Fetching'}
    </div>
  )
}
export default App