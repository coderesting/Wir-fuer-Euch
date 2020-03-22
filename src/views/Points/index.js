import React from 'react'

import './style.css'

import firebase from 'firebase.js';

class Points extends React.Component {
	
	componentDidMount()
	{
       if(firebase.auth().currentUser)
	   {		   
		firebase.database().ref('/points/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
		  console.log("Read: "+ snapshot.val());
		  document.getElementById('points').innerHTML = snapshot.val();
		});
	   }	
	}
	
	addPoints()
	{
		fetch('https://us-central1-wirfuereuch-70e4c.cloudfunctions.net/addPoints?points=1&uid='+firebase.auth().currentUser.uid);
	}
	
  render () {
    return (
		<div className="view">
		
		  <div id="points"/>
		  
		  <br/><br/><div onClick={this.addPoints.bind(this)}>Add Points</div>
		
		</div>
    )
  }
}

export default Points;
