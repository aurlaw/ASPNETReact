import React from 'react';
import {converters} from '../../utils/conversion'

export default props => (
    <fieldset>
        <div className="tey-fund-yield-label tey-value-display">
            <strong className="left">{props.teYield.toFixed(2)}% </strong>
            <span className="right">Tax-Exempt Yield for NVG<br/>
                <em><small>As of {converters.toFormattedDate(props.lastUpdated)}</small></em>
            </span>
        </div>
        <div className="tey-column-display">
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
            <p className="tey-effective-tax-rate-label tey-value-display">
                <strong className="left">{(props.taxBrackets[props.taxBracketsIndex] * 100).toFixed(2)}% </strong>
                <span className="right"><small>Effective Tax Rate</small></span>
            </p>
        </div>
        <hr/>
        Equiv Yield: <strong>{props.taxEquivYield.toFixed(2)} %</strong>
        <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={props.onHandleCalculate}>Calculate</button>
        </div>
    </fieldset>   
);
