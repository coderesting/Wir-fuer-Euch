import React from 'react';

import {ReactComponent as HomeIcon} from 'assets/homeIcon.svg';

import './style.css'

class HomeWelcome extends React.Component {
  render () {
    return (
		<div id="homeWelcome">
			<HomeIcon className="homeButton"/>
			<h2>Willkommen<br/>Zushause</h2>
			<span>Willkommen in deinem Zuhause! Hier warten viele Aktivitäten auf dich, die deine unterschiedlichen Skills fordern. Mit jeder Aktivität sammelst du Punkte. Hast du genügend Punkte erreicht, schaltet sich ein weiterer Raum mit neuen Aktivitäten und Tipps in deinem Zuhause frei.</span>
			<button onClick={this.props.onDismiss}>Erkunde jetzt dein Zuhause</button>
		</div>
    )
  }
}

export default HomeWelcome;
