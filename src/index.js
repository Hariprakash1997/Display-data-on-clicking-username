import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducers from './Reducers/index';
import App from './Component/App';

const store = createStore(AllReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>,
	document.getElementById('app')
);