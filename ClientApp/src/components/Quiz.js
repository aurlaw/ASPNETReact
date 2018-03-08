import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Quiz';
import Loader from './Loader'
import Question from './quiz/Question'
import Answer from './quiz/Answer'


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.handleAnswer = this.handleAnswer.bind(this);
      }

  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.requestQuizData();
  }
  handleAnswer(key) {
      console.log(key);
    // this.props.bracketChange(event.target.selectedIndex);
    // this.props.calculate();
  }
  render() {
      console.log(this.props.isLoading);
    return (
      <React.Fragment>
        <h1>Quiz</h1>
        <Loader isLoading={this.props.isLoading} message="Loading Quiz...">
            <p>Ready</p>
        </Loader>
      </React.Fragment>
    );
  }

}

function QuizContainer(props) {
    return (
        <React.Fragment>
            <Question name={props.question.name} />
            {props.question.answers.map((answer, index) =>
                <Answer key={index} name={answer.name} onHandleAnswer={props.onHandleAnswer} />    
            )}
        </React.Fragment>
    );
  }

  export default connect(
    state => state.quiz,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Quiz);

  /*
  <QuizContainer question={this.props.quizData.questions[this.props.currentQuestion]} onHandleAnswer={this.handleAnswer} />
  */