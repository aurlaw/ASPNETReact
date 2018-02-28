const requestCalculatorDataType = 'REQUEST_CALCULATOR_DATA';
const taxBracketChange = 'TAX_BRACKET_CHANGE';
const performCalculationType = 'PERFORM_CALCULATION';
const initialState = { teYield: 6.04, taxBracketsIndex: 0, taxBrackets: [], taxEquivYield: 0};


export const actionCreators = {
    requestCalculatorData: () => async (dispatch, getState) => {    

        var taxData = [0.408, 0.388, 0.358, 0.278, 0.24, 0.22, 0.12, 0.10]
      dispatch({ type: requestCalculatorDataType, taxData });
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
  
    if (action.type === requestCalculatorDataType) {
      return {
        ...state,
        taxBrackets: action.taxData
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
    