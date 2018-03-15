import ReducerRegistry from './ReducerRegistry';

const reducerName = 'calculator';
const createActionName = name => `app/${reducerName}/${name}`;

const requestCalculatorDataType = createActionName('REQUEST_CALCULATOR_DATA');
const receiveCalculatorDataType = createActionName('RECEIVE_CALCULATOR_DATA');
const taxBracketChange = createActionName('TAX_BRACKET_CHANGE');
const performCalculationType = createActionName('PERFORM_CALCULATION');

const initialState = { teYield: 0, lastUpdated: new Date(), taxBracketsIndex: 0, taxBrackets: [], taxEquivYield: 0, isLoading: false };

  export const actionCreators = {
    requestCalculatorData: () => async (dispatch, getState) => {    
      // if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      //   // Don't issue a duplicate request (we already have or are loading the requested data)
      //   return;
      // }
  
      dispatch({ type: requestCalculatorDataType });
  
      const url = `api/SampleData/TaxInformation`;
      const response = await fetch(url);
      const taxData = await response.json();
  
      dispatch({ type: receiveCalculatorDataType, taxData });
      dispatch({type: performCalculationType});



    },

    bracketChange: (bracketIndex) => (dispatch, getState) => {
        dispatch({type: taxBracketChange, bracketIndex});
    },

    calculate: () => (dispatch, getState) => {
        dispatch({type: performCalculationType});
    }
    
  };


  export const reducer = (state, action) => {
    state = state || initialState;
  
    // if (action.type === requestCalculatorDataType) {
    //   return {
    //     ...state,
    //     taxBrackets: action.taxData
    //   };
    // }
    if (action.type === requestCalculatorDataType) {
      return {
        ...state,
        isLoading: true
      };
    }
  
    if (action.type === receiveCalculatorDataType) {
      return {
        ...state,
        teYield: action.taxData.taxYield,
        taxBrackets: action.taxData.taxBracket,
        lastUpdated: new Date(action.taxData.taxYieldLastUpdated),
        isLoading: false
      };
    }


    if (action.type === taxBracketChange) {
        return {
          ...state,
          taxBracketsIndex: action.bracketIndex
        };
      }  
    if (action.type === performCalculationType) {
      return {
        ...state,
        taxEquivYield: state.teYield / (1 - state.taxBrackets[state.taxBracketsIndex])
      };
    }
  
    return state;
  };
  ReducerRegistry.register(reducerName, reducer);   