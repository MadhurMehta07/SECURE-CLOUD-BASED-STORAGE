import React, { Component } from 'react';
import Home from "./Home"
import Note from "./Note"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';



class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/note" exact component={Note} />
						<Route path="/" component={Home} />
						<Route path="/login" component={Login} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;