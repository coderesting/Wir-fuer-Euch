import React from 'react'

import './style.css'

import firebase from 'firebase.js';

class AccountSettings extends React.Component {
	
	logoff()
	{
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
	}
	
  render () {
    return (
		<div className="view" id="account">

		{ firebase.auth().currentUser.isAnonymous ? 'Anonymous' : '' }
		<br/>
		{ firebase.auth().currentUser.displayName }
		<br/>
		{ firebase.auth().currentUser.email }
		<br/>
		{ firebase.auth().currentUser.photoURL ? '<img src="'+firebase.auth().currentUser.photoURL +'"/>' : '' }
		<br/>
		{ firebase.auth().currentUser.displayName }
		<br/>
			
			<br/><input type="button" value="Abmelden" onClick={this.logoff.bind(this)}/>
			
		</div>
    )
  }
}

export default AccountSettings;
