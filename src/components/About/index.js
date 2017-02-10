import React, { Component } from 'react'
import css from './styles.css'

class About extends Component {
	render() {
		return(
			<div className="aboutWrapper">
				<div className="fixed-left">
					<p>a b o u t</p>
				</div>

				<div className="about-content">
					<div className="intro">
						<div className="body">
							<p>👋, I'm Annie - </p>
							<p>a New York City based web developer currently 💻 at Wire Stone.</p>
							<p>I 🏃 4 half marathons, 1 Ragnar Relay, and don't plan on stopping any time soon.</p>
							<p>In my free ⏰, I like to explore cool new ways to 🔨 sites & apps, take 📸, and drink an unruly amount of ☕️.</p>
							<p>Most importantly, I'm on a mission to make my 🐱 #instafamous so go give <a href="https://www.instagram.com/sunnystillsleeping/" target="_blank">Sunny</a> a follow️.
							<br/>
							</p>
							<p>Cheers, 👧</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About