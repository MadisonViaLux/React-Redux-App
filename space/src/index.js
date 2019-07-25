import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { reducer } from './store/reducers/index';

import NASAdata from './component/NASAdata'




const store =createStore(reducer, applyMiddleware(thunk, logger))


function App() {
    return (
      <div className="App">
          
        <h1>hello</h1>

        <NASAdata />

      </div>
    );
  }







ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
