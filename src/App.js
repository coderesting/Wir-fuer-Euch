import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Home from 'views/Home';
import Account from 'views/Account';
import Tips from 'views/Tips';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div id="app">

					<Header />
					<div id="content">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/points" component={Home} />
							<Route exact path="/tips" component={Tips} />
							<Route path="/account" component={Account} />
						</Switch>
					</div>

					<Navigation/>				
			</div>
		);
	}
}

export default App;
