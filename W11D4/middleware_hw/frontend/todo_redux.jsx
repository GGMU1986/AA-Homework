import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

function addLoggingToDispatch(store) {
  const x = store.dispatch;

  return function(action) {
    console.log(store.getState());
    console.log(action);
    x(action);
    console.log(store.getState());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
  store.dispatch = function addLoggingToDispatch(store)
});
