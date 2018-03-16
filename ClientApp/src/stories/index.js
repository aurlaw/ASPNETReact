import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../components/Footer';
import ForecastsTable from '../components/forecast/ForecastsTable';
import Calculator from '../components/calculator'
import Question from '../components/quiz/Question'
import Answer from '../components/quiz/Answer'
import {forecastData, taxData} from './data'

  storiesOf('Forecasts', module)
  .add('Default', () => (
    <ForecastsTable {...forecastData} />
  ));   

  storiesOf('Calculator', module)
  .add('Default', () => (
    <Calculator {...taxData} onHandleChange={action('onHandleChange')} onHandleCalculate={action('onHandleCalculate')} />
  ));   


  storiesOf('Quiz', module)
  .add('Question', () => (
    <Question name="Question 1" />
  ))   
  .add('Answer', () => (
    <Answer value={0} className="col-sm-6 btn btn-info" name="Answer 1" onHandleAnswer={action('onHandleAnswer')} />    
  ));   

  storiesOf('Layout', module)
  .add('Footer', () => (
    <Footer />
  )); 

