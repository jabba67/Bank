import React from 'react'

    const Contacts = ({ contacts}) => {
      return (
        <div>
         {Object.keys(contacts).filter(key => key === 'accountBalance').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{contacts[item]}</h6>
            </div>
          ))}
          
        </div>
      )
    };

    export default Contacts;

    /*
  {Object.keys(datas).filter(key => key === 'age').map((item,i) => (
            <div>
                <h6 key={i} class="card-title">{datas[item]}</h6>
            </div>
          ))}
    */