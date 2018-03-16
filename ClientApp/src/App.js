import React from 'react';
import { Route } from 'react-router';
import Loadable from 'react-loadable';

import RouteLoader from './components/RouteLoader';
import Layout from './components/Layout';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './components/Home'),
  loading: RouteLoader,
});
const Counter = Loadable({
  loader: () => import(/* webpackChunkName: 'Counter' */ './components/Counter'),
  loading: RouteLoader,
});
const FetchData = Loadable({
  loader: () => import(/* webpackChunkName: 'Forecasts' */ './components/FetchData'),
  loading: RouteLoader,
});
const TeyCalc = Loadable({
  loader: () => import(/* webpackChunkName: 'TeyCalc' */ './components/TeyCalc'),
  loading: RouteLoader,
});
const Quiz = Loadable({
  loader: () => import(/* webpackChunkName: 'Quiz' */ './components/Quiz'),
  loading: RouteLoader,
});


export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/calculator' component={TeyCalc} />
    <Route path='/quiz' component={Quiz} />
  </Layout>
);
