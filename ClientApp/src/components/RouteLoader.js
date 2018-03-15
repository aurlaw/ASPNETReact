import React from 'react';
import LoaderImage from '../assets/30.gif';
import './RouteLoader.css';


export default props => (
    <div className="loader"><img src={LoaderImage} alt="loading..."/></div>
)
