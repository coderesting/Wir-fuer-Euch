import React from 'react'

import RoomPreview from 'components/RoomPreview';
import Room from 'components/Room';
import { IconContext } from "react-icons";
import {FaCloudMoon, FaCouch, FaCoffee, FaBath, FaLock} from  'react-icons/fa';

import './style.css'


class Flat extends React.Component {
	render () {
		let rooms = this.props.flat.rooms;
		let currentRoom = this.props.flat.currentRoom;
		return (
			<div id="flat">
				{
					(currentRoom != null) ? 
						<Room room={rooms[currentRoom]}/>
					:
						<React.Fragment>
							<h1>{this.props.flat.name}</h1>
							<div id="roomsOverview">
								<div id="roomPreviews">
									<RoomPreview onClick={this.openRoom.bind(this, 0)} icon={<FaCouch/>}/>
									<RoomPreview onClick={this.openRoom.bind(this, 1)} icon={<FaCoffee/>}/>
									<RoomPreview onClick={this.openRoom.bind(this, 2)} active={true} icon={<FaCloudMoon/>}/>
									<RoomPreview onClick={this.openRoom.bind(this, 3)} icon={<FaBath/>}/>
								</div>

								<IconContext.Provider value={{ size: '40px', style: {boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', padding: '10px', background: 'var(--app-color)', borderRadius: '10px'} }}>
									<div id="locks">
										<FaLock className="lock"/>
										<FaLock className="lock"/>
										<FaLock className="lock"/>
									</div>
								</IconContext.Provider>
							</div>
						</React.Fragment>
				}
			</div>
		)
	}

	openRoom(id){
		this.props.openRoom(id);
	}
}

export default Flat;
