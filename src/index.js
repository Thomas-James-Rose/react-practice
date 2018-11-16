import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './hello-component/Hello.jsx';
import ClickCounter from './click-counter/ClickCounter.jsx';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<ClickCounter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
