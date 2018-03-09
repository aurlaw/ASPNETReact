import React from 'react';
// Answer
export default props => (
    <button type="button" className={props.className} onClick={() => props.onHandleAnswer(props.value)}>{props.name}</button>
);    