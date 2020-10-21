import React from 'react'

    const AccountBalance = ({ balance }) => {
      return (
        <div>
         {Object.keys(balance).filter(key => key === 'accountBalance').map((item,i) => (
            <div>
                <h1 key={i} class="card-title">${balance[item]}</h1>
            </div>
          ))}
        </div>
      )
    };

    export default AccountBalance;