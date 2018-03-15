import ReducerRegistry from './ReducerRegistry';

const reducerName = 'counter';
const createActionName = name => `app/${reducerName}/${name}`;

const incrementCountType = createActionName('INCREMENT_COUNT');
const decrementCountType = createActionName('DECREMENT_COUNT');
const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};

ReducerRegistry.register(reducerName, reducer);
