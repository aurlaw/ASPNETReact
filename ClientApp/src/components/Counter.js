import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet/lib/Helmet";
import { actionCreators } from '../store/Counter';

const Counter = props => (
    <React.Fragment>
      <Helmet title="Counter" />
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p>Current count: <strong>{props.count}</strong></p>

      <button onClick={props.increment}>Increment</button>
    </React.Fragment>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
