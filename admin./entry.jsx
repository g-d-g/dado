import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';

require("./src/css/main.scss");

document.write('<div id="app"/>');

ReactDOM.render(<App />, document.getElementById('app'));
