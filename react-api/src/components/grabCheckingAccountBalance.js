import React from 'react'

    const CheckingAccountBalance = ({ checkingaccountbalance }) => {

      return (
        <div>
         {Object.keys(checkingaccountbalance).filter(key => key === 'checkingAccountBalance').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{checkingaccountbalance[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default CheckingAccountBalance;