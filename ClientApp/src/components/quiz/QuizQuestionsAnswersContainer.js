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
                {props.answers.map((answer, index) =>
                    <div className="row buttons" key={answer.id}>
                    <Answer value={index} className="col-sm-6 btn btn-info" name={answer.name} onHandleAnswer={props.onHandleAnswer} />    
                    </div>
                )}
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
