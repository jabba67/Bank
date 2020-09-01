import React from 'react'

    const CheckingAccountNumbers = ({ checkingaccountnumber }) => {

      return (
        <div>
         {Object.keys(checkingaccountnumber).filter(key => key === 'checkingAccountNumber').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{checkingaccountnumber[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default CheckingAccountNumbers;