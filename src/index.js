import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router } from "react-router-dom";
import App from './App';
// import DisplayColors from './components/DisplayColors'


ReactDOM.render(( 
  <Router>

      <App />

  </Router>),

    // <App />,
  document.getElementById('root')
);

