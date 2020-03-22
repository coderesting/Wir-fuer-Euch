import React from 'react'

import './style.css'
import Login from 'views/Login'

class Recommend extends React.Component {
  render () {
    return (
		<div className="view" id="recommend">
			<Login/>
		</div>
    )
  }
}

export default Recommend;
