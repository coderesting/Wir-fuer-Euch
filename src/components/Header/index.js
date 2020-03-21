import React from 'react';
import { NavLink } from 'react-router-dom';
import {Person} from '@material-ui/icons';

import './style.css';

class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<NavLink to="/">
					<h2>#Wir für Euch</h2>
				</NavLink>

				<NavLink id="account" to="/account">
					<Person/>
				</NavLink>
			</div>
		);
	}

	checkActive = (match, location) => {
		if (!location) return false;
		const { pathname } = location;
		return pathname === '/';
	};
}

export default Header;
