import React from 'react';
import './index.css';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import combineReducers from './Reducers/index'
import {createStore} from 'redux'

const store=createStore(combineReducers);



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));


