import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

// List Card
export default props => (
    <div className={(props.className !== undefined ? props.className : 'list-card')}>
        <Link to={props.route} className="list-card-link">
            <span>{props.title}</span>
        </Link>
    </div>
);    
