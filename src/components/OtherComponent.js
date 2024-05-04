import React from 'react';

const OtherComponent = ({ value }) => {
  return (
    <div style={{ backgroundColor: "#282c34",borderRadius: "5px",marginTop:"10px",padding:"10px"}}>
      <h4>Other Component</h4>
      <p>The value passed from Dashboard is: {value}</p>
    </div>
  );
};

export default OtherComponent;