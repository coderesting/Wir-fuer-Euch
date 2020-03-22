import React from 'react';

import { NavLink } from 'react-router-dom';
import {Person} from '@material-ui/icons';
import PointDisplay from 'components/PointDisplay';

import './style.css';


class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<NavLink to="/">
					<img src="/assets/logo.png" />
				</NavLink>

				<NavLink to="/points">
					<PointDisplay/>
				</NavLink>

				<NavLink id="account" to="/account">
					<Person/>
				</NavLink>
			</div>
		);
	}
}

export default Header;
