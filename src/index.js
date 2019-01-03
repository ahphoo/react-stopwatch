// Load React API
import React from 'react';
import ReactDOM from 'react-dom';

// Import css styling for index
import './index.css';

// Import app
import Stopwatch from './Stopwatch';

// Import serviceWorker
import * as serviceWorker from './serviceWorker';

// Render a react element to the DOM in the containder 'root'
ReactDOM.render(<Stopwatch />, document.getElementById('root'));

// Takes care of all networking functionality, background processes, etc...
serviceWorker.unregister();
