require('./test/index-test.js');

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

const $main = document.getElementById('main');
ReactDOM.render(<App />, $main);
