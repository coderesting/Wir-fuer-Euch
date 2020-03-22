import React from 'react'

import './style.css'

class Challenge extends React.Component {
  render () {
    return (
		<div id="challenge">
			Challenge: {this.props.name}
		</div>
    )
  }
}

export default Challenge;
