import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";

import {FiMessageCircle} from 'react-icons/fi';
import {GoGift} from 'react-icons/go';
import {MdHome, MdTimeline} from 'react-icons/md';


import './style.css';

class Navigation extends React.Component {
	render() {
		return (
			<div id="navigation">
				<IconContext.Provider value={{size: "20px"}}>
					<NavLink exact={true} to="/">
						<MdHome/>
						<span>Home</span>
					</NavLink>

					<NavLink to="/verlauf">
						<MdTimeline/>
						<span>Punkte</span>
					</NavLink>

					<NavLink to="/recomend">
						<FiMessageCircle/>
						<span>Weitersagen</span>
					</NavLink>

					<NavLink to="/tips">
						<GoGift/>
						<span>Orga vorschlagen</span>
					</NavLink>
				</IconContext.Provider>
				
			</div>
		);
	}

	checkActive = (match, location) => {
		if (!location) return false;
		const { pathname } = location;
		return pathname === '/';
	};
}

export default Navigation;
