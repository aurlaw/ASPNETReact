import React, { Component } from 'react';
import LoaderImage from '../assets/30.gif';


export default class Loader extends Component {
    constructor(props) {
        super(props);
      }

      render() {
            if(this.props.isLoading) {
                return <span>{this.props.message}<img src={LoaderImage} /></span> ;
            }
            return this.props.children;
      }
}
