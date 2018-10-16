import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Custom Components
 */
import Section from '../components/section/section';
import AppHeader from '../../shared/components/appHeader/AppHeader';
import AppFooter from '../../shared/components/appFooter/AppFooter';

/**
 * General Layout
 */
export default class Layout extends Component {
	render() {
		return (
			<Fragment>
				<AppHeader />
				<main className="r-main">
					<div className="main__container">
						<nav>
							<ul>
								<li>
									<Link to="/">Home Route</Link>
								</li>
								<li>
									<Link to="/cabralada">Cabralada</Link>
								</li>
							</ul>
						</nav>

						<Section headline="App successfully started and created with Veams!">
							{this.props.children}
						</Section>
					</div>
				</main>
				<AppFooter />
			</Fragment>
		);
	}
}
