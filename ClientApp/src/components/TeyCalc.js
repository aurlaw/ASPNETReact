import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet/lib/Helmet";
import { actionCreators } from '../store/Calculator';
import Loader from './Loader'
import Calculator from './calculator'
// import {converters} from '../utils/conversion'

class TeyCalc extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
      }

  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.requestCalculatorData();
  }
  handleChange(event) {
    this.props.bracketChange(event.target.selectedIndex);
    this.props.calculate();
  }
  handleCalculate(event) {
    this.props.calculate();
  }
  render() {
    return (
        <React.Fragment>
        <Helmet title="Calculator" />
            <h1 className="tey-calculator-header-title">National <small>Taxable Equivalent Yield<sup>1</sup></small></h1>
            <Loader isLoading={this.props.isLoading} message="Loading Calculator...">
                <Calculator {...this.props} onHandleChange={this.handleChange} onHandleCalculate={this.handleCalculate} />
            </Loader>
      </React.Fragment>
    );
  }
}



export default connect(
    state => state.calculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(TeyCalc);
  