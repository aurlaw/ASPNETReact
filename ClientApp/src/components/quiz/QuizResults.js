import React from 'react';
// Question
export default props => (
    <React.Fragment>
        <h3>Your Result:</h3>
        <h4>{props.name}</h4>

         <button type="button" onClick={() => props.onHandleReset()}>Start Over</button>
    </React.Fragment>
);    