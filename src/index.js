import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />, document.getElementById('root'));
serviceWorker.unregister();


// ReactDOM.render(
//   <div>
//     <h2> I am React</h2>
//   </div>
//   , document.getElementById('root'));
// serviceWorker.unregister();