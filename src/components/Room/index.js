import React from 'react';

import ChallengePreview from 'components/ChallengePreview';
import Challenge from 'components/Challenge';
import RoomWelcome from 'components/RoomWelcome';
import {FaDumbbell, FaHeart, FaPuzzlePiece} from 'react-icons/fa';
import {MdChatBubble} from 'react-icons/md';

import './style.css';



class Room extends React.Component {
	state = {
		currentChallenge: null,
		showWelcome: false,
	}

	render() {
		let activities = this.props.room.activities;
		let currentActivity = this.props.currentActivity;
		return (
			<div id="room">
				{
				this.state.showWelcome ? 
					<RoomWelcome room={this.props.room} onDismiss={this.dismissWelcome.bind(this)}/>
				:
					(this.state.currentChallenge != null) ? 
						<Challenge name={this.state.currentChallenge} />
					:
						<React.Fragment>
							<h2>{this.props.name}</h2>
							<div id="gamePreviews">
								<ChallengePreview onClick={this.openChallenge.bind(this, 'sport')} icon={<FaDumbbell/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'health')} icon={<FaHeart/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'brain')} icon={<FaPuzzlePiece/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'group')} icon={<MdChatBubble/>}/>
							</div>
						</React.Fragment>
				}
			</div>			
		);
	}

	dismissWelcome(){
		this.setState({showWelcome: false});
	}

	openChallenge(gameName){
		this.setState({currentChallenge: gameName});
	}
}

export default Room;
