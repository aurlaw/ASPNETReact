import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ReducerRegistry from './ReducerRegistry';
// import * as Counter from './Counter';
// import * as WeatherForecasts from './WeatherForecasts';
// import * as Calculator from './Calculator';
// import * as Quiz from './Quiz';



export default function configureStore(history, initialState) {
  // Preserve initial state for not-yet-loaded reducers
  const combine = (reducers) => {
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState).forEach(item => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state;
      }
    });
    return combineReducers({
      ...reducers,
      routing: routerReducer
    });
  };


  // const reducers = {
  //   counter: Counter.reducer,
  //   weatherForecasts: WeatherForecasts.reducer,
  //   calculator: Calculator.reducer,
  //   quiz: Quiz.reducer
  // };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }
  const rootReducer = combine(ReducerRegistry.getReducers());
  // const rootReducer = combineReducers({
  //   ...reducers,
  //   routing: routerReducer
  // });

  const store =  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  // Replace the store's reducer whenever a new reducer is registered.
  ReducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers));
  });

  return store;
}
