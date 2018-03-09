import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Quiz';
import Loader from './Loader'
import Question from './quiz/Question'
import Answer from './quiz/Answer'
import QuizResult from './quiz/QuizResults'


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestQuizData();
    }
    handleAnswer(key) {
        this.props.nextQuestion(key);
    }
    handleReset() {
        this.props.resetQuiz();
    }

    render() {
      if(this.props.selectedResult === null) 
      {
            return (
                <div className="row">
                <h1>Quiz</h1>
                <Loader isLoading={this.props.isLoading} message="Loading Quiz...">
                    <QuizQuestionsContainer {...this.props.currentQuestion} onHandleAnswer={this.handleAnswer} />
                </Loader>
                </div>
            );
        } else {
            return (
                <QuizResult  {...this.props.selectedResult} onHandleReset={this.handleReset}  />
                );
        }
  }
}


function QuizQuestionsContainer(props) {
    if(props === null || props.answers === undefined)
        return null;

    return (
        <div className="row">
            <Question name={props.name} />
                {props.answers.map((answer, index) =>
                    <div className="row buttons">
                    <Answer key={index} value={index} className="col-sm-6 btn btn-info" name={answer.name} onHandleAnswer={props.onHandleAnswer} />    
                    </div>
                )}
        </div>
    );
  }

  export default connect(
    state => state.quiz,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Quiz);