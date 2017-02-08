import React, { Component } from 'react'
import css from './styles.css'
import Map from './Map.js'

class Runs extends Component {
	render() {
		const location = {
			lat: 40.311113,
			lng: -73.9944842
		}
		return(
			<div className="runsWrapper">
				<div className="fixed-left">
					<p>r u n s</p>
				</div>
				
				<div className="mapContainer">
					<Map center={location} />
				</div>
			</div>
		)
	}
}

export default Runs
