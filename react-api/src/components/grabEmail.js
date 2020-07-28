import React from 'react'

    const EmailAddress = ({ email }) => {

      return (
        <div>
         {Object.keys(email).filter(key => key === 'accountNumber').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{email[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default EmailAddress;

