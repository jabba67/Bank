import React from 'react'

const TransHistory = ({ transHistory }) => {

  return (
    <div>
     {transHistory.map((item,i) => (
        <div >
            <h6 key={i} class="card-title">{item}</h6>
        </div>
      ))}
      
    </div>
  )
};

export default TransHistory;