import React from 'react'

    const CheckingAccountBalance = ({ checkingaccountbalance }) => {
      return (
        <div>
         {Object.keys(checkingaccountbalance).filter(key => key === 'checkingAccountBalance').map((item,i) => (
            <div>
                <h2 key={i}>${checkingaccountbalance[item]}</h2>
            </div>
          ))}
        </div>
      )
    };

    export default CheckingAccountBalance;