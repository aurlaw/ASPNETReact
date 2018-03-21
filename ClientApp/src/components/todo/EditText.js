import React, { Component } from 'react';
import './EditText.css'


class EditText extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
        return (
            <div className="edit-text">
                <input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
            </div>
    
        );
    }

}


export  default EditText;