import React, { Component } from 'react'
import css from './styles.css'
import Map from './Map.js'

import Foundation from 'react-foundation'

class Runs extends Component {
	render() {
		const run1 = {
			lat: 40.3074723,
			lng: -73.9867165
		}
		const run2 = {
			lat: 40.9867151,
			lng: -74.0472871
		}
		const run3 = {
			lat: 33.4508378,
			lng: -112.0859534
		}
		const run4 = {
			lat: 40.7828687,
			lng: -73.9675438
		}
		const run5 = {
			lat: 44.2843894,
			lng: -74.0037255
		}
		return(
			<div className="runsWrapper">
				<div className="fixed-left">
					<p>r u n s</p>
				</div>
				
				<div className="mapContainer">
					
					<Map center={run5} />

					

					
				</div>



			</div>
		)
	}
}

export default Runs
