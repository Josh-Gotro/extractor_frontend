import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
// import DisplayColors from './components/DisplayColors'


ReactDOM.render(( 
  <Router>

      <App />

  </Router>),

    // <App />,
  document.getElementById('root')
);

