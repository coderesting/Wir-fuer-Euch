import React from 'react';

import ChallengePreview from 'components/ChallengePreview';
import Challenge from 'components/Challenge';
import {FaDumbbell, FaHeart, FaPuzzlePiece} from 'react-icons/fa';
import {MdChatBubble} from 'react-icons/md';

import './style.css';


class Room extends React.Component {
	state = {
		currentChallenge: null
	}

	render() {
		return (
			<div className="room">
				{
				(this.state.currentChallenge != null) ? 
					<Challenge name={this.state.currentChallenge} />
				:
					<div id="gamePreviews">
						<ChallengePreview onClick={this.openChallenge.bind(this, 'sport')} icon={<FaDumbbell/>}/>
						<ChallengePreview onClick={this.openChallenge.bind(this, 'health')} icon={<FaHeart/>}/>
						<ChallengePreview onClick={this.openChallenge.bind(this, 'brain')} icon={<FaPuzzlePiece/>}/>
						<ChallengePreview onClick={this.openChallenge.bind(this, 'group')} icon={<MdChatBubble/>}/>
					</div>
				}
			</div>			
		);
	}

	openChallenge(gameName){
		this.setState({currentChallenge: gameName});
	}
}

export default Room;
