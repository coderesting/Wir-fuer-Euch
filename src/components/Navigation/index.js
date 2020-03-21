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

					<NavLink to="/points">
						<MdTimeline/>
						<span>Punkte</span>
					</NavLink>

					<NavLink to="/recommend">
						<FiMessageCircle/>
						<span>Weitersagen</span>
					</NavLink>

					<NavLink to="/orga">
						<GoGift/>
						<span>Orga</span>
					</NavLink>
				</IconContext.Provider>
			</div>
		);
	}
}

export default Navigation;
