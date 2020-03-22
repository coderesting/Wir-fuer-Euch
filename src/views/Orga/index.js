import React from 'react'

import './style.css'

class Orga extends React.Component {
	state = {
		submitted: false
	}
  render () {
    return (
		<div className="view" id="orga" onClick={this.submit.bind(this)}>
			{
				this.state.submitted ?
					<div id="orgaEnd" ></div>
				:
					<div id="orgaForm"></div>
			}
			
		</div>
    )
  }

  submit(){
	  console.log('test');
	  this.setState({submitted: true})
  }
}

export default Orga;
