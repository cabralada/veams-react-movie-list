// Generic libraries
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { object } from 'prop-types';

// Containers, Components, Store & More
// import store from './../../../app.store';
// import * as fromData from '../../store/home.selectors';
import { bindActionCreators } from 'redux';
import { fetchContent } from './../../../core/store/appactions';

/**
 * Get slice out of current state by using selector functions.
 *
 * @param {object} state - Current state of the whole store.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchContent }, dispatch);
}

/**
 * @class
 * @classdesc Container component to render a view and
 * decorate that with the selected store slice.
 */
// @connect(mapStateToProps)

class Home extends Component {
	componentDidMount() {
		this.props.fetchContent();
	}

	/**
	 * Render component
	 */
	render() {
		// const { entities } = this.props;

		return (
			<div>
				<p>Which movie your are looking for?</p>

				<form>
					<input type="text" />
				</form>

				<ul>
					<li>movie name</li>
				</ul>
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Home);
