/**
 * Main entry file for styles.
 */
import './app.scss';

/**
 * Main entry file for application.
 */
import { Veams } from './app.veams';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import routes from './app.routes';
import store, { history } from './app.store';

/**
 * Render application
 */
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div className="app">{renderRoutes(routes)}</div>
		</Router>
	</Provider>,
	document.querySelector('#root')
);
