import React from 'react'

    const AccountNumbers = ({ datas }) => {

      return (
        <div>
         {Object.keys(datas).filter(key => key === 'accountNumber').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{datas[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default AccountNumbers;

    /*
  {Object.keys(datas).filter(key => key === 'age').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{datas[item]}</h6>
            </div>
          ))}
    */