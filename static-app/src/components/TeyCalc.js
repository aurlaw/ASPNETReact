import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Calculator';


class TeyCalc extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
      }

  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.requestCalculatorData();
    this.props.calculate();
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
      <div className={this.props.className}>
        <h1>National <small>Taxable Equivalent Yield<sup>1</sup></small></h1>
        <Calculator {...this.props} onHandleChange={this.handleChange} onHandleCalculate={this.handleCalculate}  />
      </div>
    );
  }
}

function Calculator(props) {
  return (
        <fieldset>
            <div className="form-group">
                <strong className="left">{props.teYield.toFixed(2)}% </strong>
                <span className="right">Tax-Exempt Yield for NVG<br/>
                    <em><small>As of 2/28/2018</small></em>
                </span>
            </div>
            <div className="form-group">
                <div className="left">
                    <select id="tey-federal-tax-rate" name="federal-tax-rate" value={props.taxBrackets[props.taxBracketsIndex]} onChange={props.onHandleChange}>
                    {props.taxBrackets.map(bracket =>
                    <option key={bracket} value={bracket}>{(bracket * 100).toFixed(2)}%</option>
                    )}
                    </select>
                </div>
                <div className="right">
                    <p><label htmlFor="tey-federal-tax-rate">Federal Tax Rate</label></p>
                </div>
            </div>
            <div className="form-group">
                <p>
                    <strong className="left">{(props.taxBrackets[props.taxBracketsIndex] * 100).toFixed(2)}% </strong>
                    <span className="right"><small>Effective Tax Rate</small></span>
                </p>
            </div>
            <div className="form-group">
                <div className="left">
                Equiv Yield:
                </div>
                <div className="right">
                <strong>{props.taxEquivYield.toFixed(2)} %</strong>
                </div>
            </div>
            
            <div className="form-group footer">
                <button type="button" onClick={props.onHandleCalculate}>Calculate</button>
            </div>
        </fieldset>   
  );
}


export default connect(
    state => state.calculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(TeyCalc);
  