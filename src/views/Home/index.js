import React from 'react';

import Flat from 'components/Flat'
import {ReactComponent as HomeButton} from 'assets/homeButton.svg';
import homeState from 'assets/homeState.json';
import HomeWelcome from 'components/HomeWelcome';

import './style.css';


class Home extends React.Component {
	state = homeState
	render() {
		let flat = this.state.flats[this.state.currentFlat];
		return (
			<div className="view" id="home">
				{
					this.state.isHome ?
						this.state.showWelcome ? 
							<HomeWelcome onDismiss={this.dismissWelcome.bind(this)} />
						:
							<Flat flat={flat} openRoom={this.openRoom.bind(this)}/>
					:
						<HomeButton onClick={this.confirmIsHome.bind(this)} id="homeButton"/>
				}				
			</div>
		);
	}

	confirmIsHome(){
		this.setState({isHome: true});
	}

	dismissWelcome(){
		this.setState({showWelcome: false});
	}

	openRoom(id){
		this.setState(state => {
			state.flats[state.currentFlat].currentRoom = id
			return state
		})
	}
}

export default Home;
