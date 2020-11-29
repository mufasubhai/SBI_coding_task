import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore();
  
  
  ReactDOM.render(
    <React.StrictMode>
      <Root store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  window.poop = console.log("poop");
  window.getState = store.getState
  
  console.log(store)


})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

