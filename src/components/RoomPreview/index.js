import React from 'react';

import { IconContext } from "react-icons";

import './style.css';

class RoomPreview extends React.Component {
	render() {
		let activeClass = this.props.active ? 'active' : '';
		return (
			<div onClick={this.props.onClick} className={'roomPreview '+activeClass}>
				<IconContext.Provider value={{ color: "var(--app-color)", size: '100%'}}>
					{this.props.icon}
				</IconContext.Provider>
			</div>
		);
	}
}

export default RoomPreview;
