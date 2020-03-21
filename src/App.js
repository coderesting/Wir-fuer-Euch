import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

import Home from 'views/Home';
import Points from 'views/Points';
import Recommend from 'views/Recommend';
import Orga from 'views/Orga';
import Account from 'views/Account';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div id="app">

					<Header />
					<div id="content">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/points" component={Points} />
							<Route exact path="/recommend" component={Recommend} />
							<Route exact path="/orga" component={Orga} />
							<Route path="/account" component={Account} />
						</Switch>
					</div>

					<Navigation/>				
			</div>
		);
	}
}

export default App;
