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
		showWelcome: true,
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
							<h1>{this.props.room.name}</h1>
							<div id="gamePreviews">
								<ChallengePreview onClick={this.openChallenge.bind(this, 'sport')} notImplemented={true} icon={<FaDumbbell/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'health')} notImplemented={true} icon={<FaHeart/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'brain')} icon={<FaPuzzlePiece/>}/>
								<ChallengePreview onClick={this.openChallenge.bind(this, 'group')} notImplemented={true} icon={<MdChatBubble/>}/>
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
