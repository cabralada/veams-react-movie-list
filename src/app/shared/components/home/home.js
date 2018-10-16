// Generic libraries
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { object } from 'prop-types';

// Containers, Components, Store & More
import store from './../../../app.store';
// import * as fromData from '../../store/home.selectors';
import { bindActionCreators } from 'redux';
import { fetchContent } from './../../../core/store/appactions';
import Appcta from '../appcta/appcta';

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
	constructor(props) {
		super(props);

		console.log(props);
	}

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

				<Appcta type="a" goto="http://google.com" text="test button" />

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
