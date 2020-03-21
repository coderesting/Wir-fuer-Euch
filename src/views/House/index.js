import React from 'react'

import RoomPreview from 'components/RoomPreview';
import {FaCloudMoon} from  'react-icons/fa';
import {FaCouch} from 'react-icons/fa';
import {FaCoffee} from 'react-icons/fa';
import {FaBath} from 'react-icons/fa';

import './style.css'

class House extends React.Component {
  render () {
    return (
		<div className="view" id="house">
			<div id="flat">
				<div id="rooms">
					<RoomPreview onClick={this.openRoom.bind(this, 'livingroom')} active={false} icon={<FaCouch/>}/>
					<RoomPreview onClick={this.openRoom.bind(this, 'kitchen')} active={false} icon={<FaCoffee/>}/>
					<RoomPreview onClick={this.openRoom.bind(this, 'bedroom')} active={true} icon={<FaCloudMoon/>}/>
					<RoomPreview onClick={this.openRoom.bind(this, 'bathroom')} active={false} icon={<FaBath/>}/>
				</div>
				<div id="locks">
					
				</div>
			</div>
			
		</div>
    )
  }

  openRoom(roomName){
	  console.log(roomName);
  }
}

export default House;
