import React from 'react';

export default props => (
    <table className='table'>
    <thead>
        <tr>
        <th>Date</th>
        <th>Temp. (C)</th>
        <th>Temp. (F)</th>
        <th>Summary</th>
        </tr>
    </thead>
    <tbody>
        {props.forecasts.map(forecast =>
        <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
        </tr>
        )}
    </tbody>
    </table>
);
  