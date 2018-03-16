import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet/lib/Helmet";
import { actionCreators } from '../store/WeatherForecasts';
import ForecastsTable from './forecast/ForecastsTable';
import ForecastsPagination from './forecast/ForecastsPagination';

class FetchData extends Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Weather Forecast" />
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        <ForecastsTable {...this.props} />
        <ForecastsPagination {...this.props} />
      </React.Fragment>
    );
  }
}


export default connect(
  state => state.weatherForecasts,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
