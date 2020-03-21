import React from 'react'

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'

import './style.css'

class Login extends React.Component {
  render () {
    return (
		<div className="provider" id="login">
			<IconContext.Provider value={{ color: "var(--background-color)"}}>
				<div className="provider" data-providername="twitter">
					<FaTwitter/>
				</div>
			
				<div className="provider" providername="facebook">
					<FaFacebook/>
				</div>
			
				<div className="provider" data-providername="google">
					<FaGoogle/>
				</div>

				<div className="provider" data-providername="google">
					<FaLinkedin/>
				</div>
			</IconContext.Provider>
		</div>
    )
  }
}

export default Login;
