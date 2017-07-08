import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import allReducers from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(allReducers, applyMiddleware(thunk, logger));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState></AppWithNavigationState>
			</Provider>
		);
	}
}

export default App;