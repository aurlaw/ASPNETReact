import React from 'react';
// Answer
export default props => (
    <button type="button" onClick={() => props.onHandleAnswer(props.value)}>{props.name}</button>
);    