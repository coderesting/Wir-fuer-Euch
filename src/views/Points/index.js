import React from 'react'
import Login from 'views/Login';
import AccountSettings from 'views/AccountSettings';

import './style.css'

class Account extends React.Component {
  render () {
	let isSingnedIn = false;
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
