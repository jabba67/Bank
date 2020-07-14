    // src/components/contacts.js
    import React from 'react'

    const AccountNumbers = ({ datas}) => {
      const element = fetch("https://localhost:44358/api/UserInformations/45505")
      .then((response) => response.json())
      .then((data) => console.log('Here is my data returned:', data.accountNumber));

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