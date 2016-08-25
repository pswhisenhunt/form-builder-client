import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import {AppContainer} from './modules/app/index.js';

require('../assets/styles/app.scss');

ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('app')
);
