import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux'
import {FormBase} from './formBase/index.js';

require("../assets/styles/app.scss");

ReactDOM.render(
	<Provider store={store}>
		<FormBase/>
	</Provider>,
	document.getElementById('app')
);
