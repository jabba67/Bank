import React from 'react'

    const AccountBalance = ({ balance }) => {
      return (
        <div>
         {Object.keys(balance).filter(key => key === 'accountBalance').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{balance[item]}</h6>
            </div>
          ))}
        </div>
      )
    };

    export default AccountBalance;