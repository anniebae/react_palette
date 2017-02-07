import React, { Component } from 'react'
import css from './styles.css'
import Map from './Map.js'

class Runs extends Component {
	render() {
		return(
			<div className="runsWrapper">
				<div className="fixed-left">
					<p>r u n s</p>
				</div>

				<Map />
			</div>
		)
	}
}

export default Runs
