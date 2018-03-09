const requestQuizDataType = 'REQUEST_QUIZ_DATA';
const receiveQuizDataType = 'RECEIVE_QUIZ_DATA';
const quizQuestionChangeType = 'QUIZ_QUESTION_CHANGE';
const quizGetResultType = 'QUIZ_GET_RESULT';
const quizResetType = 'QUIZ_RESET';
const initialState = { quizData:  null, currentQuestion: null, currentQuestionIndex: 0, selectedAnswers: [], selectedResult: null,  isLoading: false };


const getQuestion = (quizData, questionIndex) => {
  let q = quizData ? quizData.questions[questionIndex] : null;
  return q;
}

const getQuizResult = (questionsArr, selectedAnswersArr) => {
  let resultsArr = [];
  selectedAnswersArr.map((answer, aInx) => {
    resultsArr = questionsArr[aInx].answers[answer].weightedScore.map((score, sInx) => {
       // iterate chosen answers weighted score and sum into new array
        return score + (resultsArr[sInx] !== undefined ? resultsArr[sInx] : 0);
    });
    return 0;
  });
  // reduce result to best index based on max val
  let resultIndex = resultsArr.reduce((bestInx, curVal, curInx, arr) => curVal > arr[bestInx] ? curInx : bestInx, 0);  
  
  return resultIndex;  
}


export const actionCreators = {
  requestQuizData: () => async (dispatch, getState) => {    
    // if (startDateIndex === getState().weatherForecasts.startDateIndex) {
    //   // Don't issue a duplicate request (we already have or are loading the requested data)
    //   return;
    // }
    dispatch({ type: requestQuizDataType });

    const url = `api/SampleData/QuizInformation`;
    const response = await fetch(url);
    const quizData = await response.json();

    dispatch({ type: receiveQuizDataType, quizData });
  },

  nextQuestion: (answerIndex) => (dispatch, getState) => {
    const { quiz } = getState();
    if(quiz.quizData.questions.length > quiz.currentQuestionIndex + 1)
    {
      dispatch({type: quizQuestionChangeType, answerIndex});
    }
    else {
      let answersArr = [...quiz.selectedAnswers, answerIndex];
      const resultIndx = getQuizResult(quiz.quizData.questions, answersArr);
      let result = quiz.quizData.results[resultIndx]; 
      dispatch({type: quizGetResultType, answersArr, result});
    }

  },
  resetQuiz: () => (dispatch, getState) => {
    dispatch({type: quizResetType});
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
      currentQuestion:  getQuestion(action.quizData, state.currentQuestionIndex),  
      isLoading: false
    };
  }


  if (action.type === quizQuestionChangeType) {
      var newQuesInx = state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: newQuesInx,
        currentQuestion:  getQuestion(state.quizData, newQuesInx),  
        selectedAnswers: [...state.selectedAnswers, action.answerIndex]
      };
    }  

  if (action.type === quizGetResultType) {
    return {
      ...state,
      selectedAnswers: action.answersArr,
      selectedResult: action.result
    };
  }

  if(action.type === quizResetType) {
    return {
      ...state,
      currentQuestionIndex: initialState.currentQuestionIndex, 
      currentQuestion: getQuestion(state.quizData, initialState.currentQuestionIndex), 
      selectedAnswers: initialState.selectedAnswers, 
      selectedResult: initialState.selectedResult
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