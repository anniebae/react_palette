import React, { Component } from 'react'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import css from './styles.css'

class Home extends Component {
	render() {
		return (
			<div className="home-page">

				<div className="content-wrapper">
					<Link to="/">
						<div className="content-subj tab-home">
							<p className="title">Home</p>
						</div>
					</Link>

					<Link to="/about">
					<div className="content-subj tab-about">
						<p className="title">About</p>
					</div>
					</Link>
					<div className="content-subj tab-work">
						<p className="title">Work</p>
					</div>
					<div className="content-subj tab-contact">
						<p className="title">Contact</p>
					</div>
				</div>

			</div>
		)
	}
}

export default Home