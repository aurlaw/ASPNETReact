import React from 'react';

import Loader from './../Loader'
import Question from './Question'
import Answer from './Answer'
// Question/Answers Container

function QuizQuestionsContainer(props) {
    if(props === null || props.answers === undefined)
        return null;
    return (
        <div className="row">
            <Question name={props.name} />
            <div className="row" >
                {props.answers.map((answer, index) =>
                    <Answer key={answer.id} value={index} className="col-xs-12 col-md-5 btn btn-info grid-btn" name={answer.name} onHandleAnswer={props.onHandleAnswer} />    
                )}
            </div>
        </div>
    );
}

export default props => (
    <div className="row">
        <h1>Quiz</h1>
        <Loader isLoading={props.isLoading} message="Loading Quiz...">
            <QuizQuestionsContainer {...props} onHandleAnswer={props.onHandleAnswer} />
        </Loader>
    </div>
);    
