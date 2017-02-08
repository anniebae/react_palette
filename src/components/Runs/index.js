import React, { Component } from 'react'
import css from './styles.css'
import Map from './Map.js'

import Foundation from 'react-foundation'
// import foundation from '../../../css/foundation.min.css'

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
		return(
			<div className="runsWrapper">
				<div className="fixed-left">
					<p>r u n s</p>
				</div>
				
				<div className="mapContainer">
					
					<Map center={run1} />

					<div className="row">
						<div className="large-6 columns"><Map center={run1} /></div>
						<div className="large-6 columns"><Map center={run2} /></div>
					</div>
				</div>



			</div>
		)
	}
}

export default Runs
