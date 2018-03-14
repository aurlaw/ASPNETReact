import React from 'react';
import { Route } from 'react-router';
import Loadable from 'react-loadable';

import RouteLoader from './components/RouteLoader';
import Layout from './components/Layout';
// import Home from './components/Home';
// import Counter from './components/Counter';
// import FetchData from './components/FetchData';
// import TeyCalc from './components/TeyCalc'
// import Quiz from './components/Quiz'

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: RouteLoader,
});
const Counter = Loadable({
  loader: () => import('./components/Counter'),
  loading: RouteLoader,
});
const FetchData = Loadable({
  loader: () => import('./components/FetchData'),
  loading: RouteLoader,
});
const TeyCalc = Loadable({
  loader: () => import('./components/TeyCalc'),
  loading: RouteLoader,
});
const Quiz = Loadable({
  loader: () => import('./components/Quiz'),
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
