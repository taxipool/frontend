import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var express = require('express');
// var router = express.Router();


// router.get('/', function(req, res) {
  
//   res.send({greeting:'Hello React x Node.js'});
// });

// module.exports = router;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
