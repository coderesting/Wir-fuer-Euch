import React from 'react'
import Login from 'views/Login';
import AccountSettings from 'views/AccountSettings';

import firebase from 'firebase.js';

import './style.css'

class Account extends React.Component {
  render () {
	let isSingnedIn = firebase.auth().currentUser;
    return (
		<div className="view" id="account">

			{
				isSingnedIn ?
					<AccountSettings/>
				: 
					<Login/>
			}
			
			
		</div>
    )
  }
}

export default Account;
