// Generic libraries
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { object } from 'prop-types';

// import * as fromData from '../../store/home.selectors';
import { bindActionCreators } from 'redux';
import { fetchContent } from './../../../core/store/appactions';
import Movielists from '../../../core/features/movielists/movielists';
import SearchMovie from '../../../core/containers/search/search';
import Pagination from '../../../core/features/pagination/pagination';

let counter;

/**
 * Get slice out of current state by using selector functions.
 *
 * @param {object} state - Current state of the whole store.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchContent }, dispatch);
}

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

/**
 * @class
 * @classdesc Container component to render a view and
 * decorate that with the selected store slice.
 */
// @connect(mapStateToProps)


class Home extends Component {

	constructor() {
		super();

		this.state = {
			counter : 1
		}

		this.timeout = null;
	}

	componentDidMount() {
		this.props.fetchContent(this.state.counter)
	}

	buildContent = (page) => {
		if(this.timeout === null) {
			this.timeout = window.setTimeout(() => {
				this.timeout = null;
				switch(page) {
					case 'next':
						this.state.counter++
						this.props.fetchContent(this.state.counter)
						break;
					case 'prev':
						if(this.state.counter < 2) return
						this.state.counter--
						this.props.fetchContent(this.state.counter)
						break;
					default:
						this.props.fetchContent(1)
				}
			}, 300);
		}
	}

	addPage = () => {
		this.buildContent('next')
	}

	prevPage = () => {
		this.buildContent('prev');
	}

	/**
	 * Render component
	 */
	render() {
		if (typeof this.props.movies.movies === 'undefined') {
			return <div>Loading data</div>
		}

		const { movies } = this.props.movies
		const initMoviesList = movies.results

		return (
			<div>
				<SearchMovie/>
				<Movielists listData={initMoviesList} />
				<Pagination
				addPage = {this.addPage}
				prevPage = {this.prevPage}
				counter={this.state.counter} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
