import React, { Component } from 'react';
import TeyCalc from './TeyCalc'
import './Calculator.css';


const Calculator = ({ visible }) => ( 
    <TeyCalc className={visible ? 'slideIn' : 'slideOut'} />
  )
export default class CalcContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { visible: false }
      }
      handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }
    render() {
        return (
          <div className="container">
            <button type="button" onClick={this.handleClick}>
              {this.state.visible ? 'Hide Calculator' : 'Show Calculator'}
            </button>
            <Calculator visible={this.state.visible} />
          </div>
        )
      }
}