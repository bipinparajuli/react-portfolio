import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './StateProvider';
import Reducer,{initialState} from './reducer'

ReactDOM.render(
  <>
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={Reducer}>
  <App />
  </StateProvider>
  </BrowserRouter>
  
  </>,
  document.getElementById('root')
);

