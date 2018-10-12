const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const reload = require('./reload');

module.exports = (routes, apiRoutes) => {
	const app = express();
	
	if (process.env.NODE_ENV === 'local') {
		app.use(reload());
	}
	
	app.use(express.static('app'));
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use(morgan('dev'));

	/**
	 * Register routes and start express server
	 *
	 */
	app.use(apiRoutes);
	app.use(routes);

	return app;
};
