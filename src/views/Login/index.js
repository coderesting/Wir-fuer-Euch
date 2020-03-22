import React from 'react'

import firebase from 'firebase.js';

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'

import './style.css'

class Login extends React.Component {
	
	  anonymousLogin()
	  {
	    firebase.auth().signInAnonymously().catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	  }
	  
	googleLogin()
	{
	
        var provider = new firebase.auth.GoogleAuthProvider();
	
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
	}
	
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
			
				<div className="provider" data-providername="google" onClick={this.googleLogin.bind(this)}>
					<FaGoogle/>
				</div>
				
				<div className="provider" data-providername="google">
					<FaLinkedin/>
				</div>
				
				<div className="provider" data-providername="anonymous" onClick={this.anonymousLogin.bind(this)}>
					Anonym
				</div>
			</IconContext.Provider>
		</div>
    )
  }
}

export default Login;
