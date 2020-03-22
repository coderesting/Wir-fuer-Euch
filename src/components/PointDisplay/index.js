import React from 'react'

import {FaStar} from "react-icons/fa";
import {IconContext} from "react-icons";

import './style.css';
import firebase from 'firebase.js';

class PointDisplay extends React.Component {
	state = {
		points: 23
	}
	componentDidMount(){
    	if(firebase.auth().currentUser){		   
			firebase.database().ref('/points/'+firebase.auth().currentUser.uid).on('value', function(snapshot) {
			console.log("Read: "+ snapshot.val());
			this.setState({points: snapshot.val()});
			});
		}
	}
  render () {
    return (
		<div id="pointDisplay">
			<IconContext.Provider value={{ color: "var(--app-color)", size: '25px'}}>
				<FaStar/>
			</IconContext.Provider>
			
			<span>{this.state.points}</span>
		</div>
    )
  }
}

export default PointDisplay;
