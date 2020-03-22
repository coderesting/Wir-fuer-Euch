import React from 'react'

import './style.css'

import ChallengeAlarm from 'components/ChallengeAlarm';

class Challenge extends React.Component {
  render () {
    return (
		<div className="view" id="game">
			{
				(this.props.name) == 'brain' ?
					<ChallengeAlarm/>
				:
					<span>Challenge: {this.props.name} noch nicht vorhanden</span>
			}
			
		</div>
    )
  }
}

export default Challenge;
