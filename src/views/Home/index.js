import React from 'react';

import House from 'components/House'
import {ReactComponent as HomeButton} from 'assets/homeButton.svg';

import './style.css';

class Home extends React.Component {
	state = {
		isHome: true
	}
	render() {
		return (
			<div className="view" id="home">
				{
					this.state.isHome ?
						<House/>
					:
						<HomeButton onClick={this.confirmIsHome.bind(this)} id="homeButton"/>
				}				
			</div>
		);
	}

	confirmIsHome(){
		this.setState({isHome: true});
	}
}

export default Home;
