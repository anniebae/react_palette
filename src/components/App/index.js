import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'
import Home from '../../components/Home'
import About from '../../components/About'

import css from './styles.css'

class App extends Component {
	render() {
		return (
			<div className="appWrapper">

				<Link to="/">Annie</Link>
				
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

var appContainer = document.querySelector('#app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
		</Route>
	</Router>,
	appContainer
);
