import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { actionCreators } from '../store/WeatherForecasts';

class TeyCalc extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
    // const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    // this.props.requestWeatherForecasts(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    // const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    // this.props.requestWeatherForecasts(startDateIndex);
  }

  render() {
    return (
      <div>
        <h1 class="tey-calculator-header-title">National <small>Taxable Equivalent Yield<sup>1</sup></small></h1>
        {renderCalculator(this.props)}
      </div>
    );
  }
}

function renderCalculator(props) {
  return (
        <fieldset>
            <div className="tey-fund-yield-label tey-value-display">
                <strong className="left">6.04%</strong>
                <span className="right">Tax-Exempt Yield for NVG<br/>
                    <em><small>As of 2/28/2018</small></em>
                </span>
            </div>
            <div className="tey-column-display">
                <div className="left">
                    <select id="tey-federal-tax-rate" name="federal-tax-rate">
                    <option value="0.408" selected="">40.80%</option>
                    <option value="0.388">38.80%</option>
                    <option value="0.358">35.80%</option>
                    <option value="0.278">27.80%</option>
                    <option value="0.24">24.00%</option>
                    <option value="0.22">22.00%</option>
                    <option value="0.12">12.00%</option>
                    <option value="0.1">10.00%</option>
                    </select>
                </div>
                <div className="right">
                    <p><label for="tey-federal-tax-rate">Federal Tax Rate</label></p>
                </div>
            </div>
            <div className="form-group">
                <p className="tey-effective-tax-rate-label tey-value-display">
                    <strong className="left">40.80%</strong>
                    <span className="right"><small>Effective Tax Rate</small></span>
                </p>
            </div>
            <hr/>
            <div className="form-group">
                <button type="button" className="tey-btn tey-btn--calculate" data-action="calculate-tey">Calculate</button>
            </div>
        </fieldset>   
  );
}


export default connect()(TeyCalc);
