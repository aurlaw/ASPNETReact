const requestQuizDataType = 'REQUEST_QUIZ_DATA';
const receiveQuizDataType = 'RECEIVE_QUIZ_DATA';
const quizQuestionChangeType = 'QUIZ_QUESTION_CHANGE';
const quizGetResultType = 'QUIZ_GET_RESULT';
const initialState = { quizData:  null, currentQuestion: 0, selectedAnswers: [], selectedResult: null,  isLoading: false };


  export const actionCreators = {
    requestQuizData: () => async (dispatch, getState) => {    
      // if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      //   // Don't issue a duplicate request (we already have or are loading the requested data)
      //   return;
      // }
      console.log('requestQuizData');
      dispatch({ type: requestQuizDataType });
  
      // const url = `api/SampleData/QuizInformation`;
      // const response = await fetch(url);
      // const quizData = await response.json();
  
      // dispatch({ type: receiveQuizDataType, quizData });
    },

    nextQuestion: (questionAnswerIndex) => (dispatch, getState) => {
        dispatch({type: quizQuestionChangeType, questionAnswerIndex});
    },

    getResult: () => (dispatch, getState) => {
        dispatch({type: quizGetResultType});
    }
    
  };


  export const reducer = (state, action) => {
    state = state || initialState;
  
    if (action.type === requestQuizDataType) {
      return {
        ...state,
        isLoading: true
      };
    }
  
    if (action.type === receiveQuizDataType) {
      return {
        ...state,
        quizData: action.quizData,
        isLoading: false
      };
    }


    if (action.type === quizQuestionChangeType) {

        return {
          ...state,
          currentQuestion: state.currentQuestion++,
          selectedAnswers: [...state.selectedAnswers, action.questionAnswerIndex]
        };
      }  


    if (action.type === quizGetResultType) {
        //TODO: function to return result index
      return {
        ...state,
        selectedResult: state.quizData.results[0]
      };
    }
  
    return state;
  };
    




/*
{
   "results":[
      {
         "name":"Result 1"
      },
      {
         "name":"Result 2"
      },
      {
         "name":"Result 3"
      }
   ],
   "questions":[
      {
         "name":"Question 1",
         "answers":[
            {
               "name":"Q1 Answer 1",
               "weightedScore":[
                  0.75,
                  0.5,
                  0.25
               ]
            },
            {
               "name":"Q1 Answer 2",
               "weightedScore":[
                  0.5,
                  0.25,
                  0.75
               ]
            },
            {
               "name":"Q1 Answer 3",
               "weightedScore":[
                  0.25,
                  0.75,
                  0.5
               ]
            },
            {
               "name":"Q1 Answer 4",
               "weightedScore":[
                  0.25,
                  0.5,
                  0.51
               ]
            }
         ]
      },
      {
         "name":"Question 2",
         "answers":[
            {
               "name":"Q2 Answer 1",
               "weightedScore":[
                  0.75,
                  0.5,
                  0.25
               ]
            },
            {
               "name":"Q2 Answer 2",
               "weightedScore":[
                  0.5,
                  0.25,
                  0.75
               ]
            },
            {
               "name":"Q2 Answer 3",
               "weightedScore":[
                  0.25,
                  0.75,
                  0.5
               ]
            },
            {
               "name":"Q2 Answer 4",
               "weightedScore":[
                  0.25,
                  0.5,
                  0.51
               ]
            }
         ]
      },
      {
         "name":"Question 3",
         "answers":[
            {
               "name":"Q3 Answer 1",
               "weightedScore":[
                  0.75,
                  0.5,
                  0.25
               ]
            },
            {
               "name":"Q3 Answer 2",
               "weightedScore":[
                  0.5,
                  0.25,
                  0.75
               ]
            },
            {
               "name":"Q3 Answer 3",
               "weightedScore":[
                  0.25,
                  0.75,
                  0.5
               ]
            },
            {
               "name":"Q3 Answer 4",
               "weightedScore":[
                  0.25,
                  0.5,
                  0.51
               ]
            }
         ]
      },
      {
         "name":"Question 4",
         "answers":[
            {
               "name":"Q4 Answer 1",
               "weightedScore":[
                  0.75,
                  0.5,
                  0.25
               ]
            },
            {
               "name":"Q4 Answer 2",
               "weightedScore":[
                  0.5,
                  0.25,
                  0.75
               ]
            },
            {
               "name":"Q4 Answer 3",
               "weightedScore":[
                  0.25,
                  0.75,
                  0.5
               ]
            },
            {
               "name":"Q4 Answer 4",
               "weightedScore":[
                  0.25,
                  0.5,
                  0.51
               ]
            }
         ]
      }
   ]
}
*/