import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../../layouts/layout';

class AppCore extends Component {
	render() {
		return (
			<div className="page-wrapper">
				<Layout>{renderRoutes(this.props.route.routes)}</Layout>
			</div>
		);
	}
}

export default AppCore;
