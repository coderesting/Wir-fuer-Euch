import React from 'react'

import RoomPreview from 'components/RoomPreview';
import Room from 'components/Room';
import {FaCloudMoon, FaCouch, FaCoffee, FaBath} from  'react-icons/fa';

import './style.css'

class House extends React.Component {
	state = {
		currentRoom: null
	}

	render () {
		return (
			<div id="house">
				{
				(this.state.currentRoom != null) ? 
					<Room name={this.state.currentRoom} />
				:
					<div id="roomPreviews">
						<RoomPreview onClick={this.openRoom.bind(this, 'livingroom')} active={true} icon={<FaCouch/>}/>
						<RoomPreview onClick={this.openRoom.bind(this, 'kitchen')} icon={<FaCoffee/>}/>
						<RoomPreview onClick={this.openRoom.bind(this, 'bedroom')} icon={<FaCloudMoon/>}/>
						<RoomPreview onClick={this.openRoom.bind(this, 'bathroom')} icon={<FaBath/>}/>
					</div>
				}
			</div>
		)
	}

	openRoom(roomName){
		this.setState({currentRoom: roomName});
	}
}

export default House;
