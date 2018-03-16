import React from 'react';
import { Link } from 'react-router-dom';

function ForecastsPaginationContainer(props) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;
  
    return <p className='clearfix text-center'>
      <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Previous</Link>
      <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Next</Link>
      {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}


export default props => (
    <ForecastsPaginationContainer {...props} />
);  