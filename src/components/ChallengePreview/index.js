import React from 'react';

import { IconContext } from "react-icons";

import './style.css';

class ChallengePreview extends React.Component {
	render() {
		return (
			<div onClick={this.props.onClick} className="challengePreview">
				<IconContext.Provider value={{ color: "var(--app-color)", size: "100%"}}>
					{this.props.icon}
				</IconContext.Provider>
			</div>
		);
	}
}

export default ChallengePreview;
