import React from 'react';

import './style.css'

class RoomWelcome extends React.Component {
  render () {
    return (
		<div id="roomWelcome">
			<h2>{this.props.room.name}</h2>
			<span>{this.props.room.description}</span>
			<button onClick={this.props.onDismiss}>{this.props.room.enter}</button>
		</div>
    )
  }
}

export default RoomWelcome;
