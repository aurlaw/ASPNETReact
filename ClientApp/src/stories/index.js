import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../index.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import Footer from '../components/Footer';
import ForecastsTable from '../components/forecast/ForecastsTable';
import Calculator from '../components/calculator'
import Question from '../components/quiz/Question'
import Answer from '../components/quiz/Answer'
import {forecastData, taxData} from './data'

import ListCard from '../components/todo/Card'
import ListCardAdd from '../components/todo/CardAdd'
import EditText from '../components/todo/EditText'

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

  storiesOf('TODO', module)
  .addDecorator(story => (
    <Provider>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add('List Card', () => (
    <ListCard title="My List" route={action('my list detail')}/>
  ))
  .add('Add List Card', () => (
    <ListCardAdd />
  ))
  .add('Edit Text', () => (
    <EditText name="" placeholder="Add Item" />
  )); 


  storiesOf('Layout', module)
  .add('Footer', () => (
    <Footer  />
  )); 

