import React from 'react';
// Question
export default props => (
    <div className="row">
        <h3>Your Result:</h3>
        <h4>{props.name}</h4>

         <button type="button" className="col-sm-3 btn btn-success" onClick={() => props.onHandleReset()}>Start Over</button>
    </div>
);    