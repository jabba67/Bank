import React from 'react'

    const AccountNumbers = ({ accountnumber }) => {

      return (
        <div>
         {Object.keys(accountnumber).filter(key => key === 'accountNumber').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{accountnumber[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default AccountNumbers;