import React, { Component } from 'react'
import css from './styles.css'

import Map from './Map.js'

class Contact extends Component {
	render() {
		const location = {
			lat: 40.7440334,
			lng: -73.9954773
		}

		const markers = [
			{
				location: {
					lat: 40.7440334,
					lng: -73.9954773
				}
			}
		]

		return(
			<div className="contactWrapper">
				<div className="fixed-left">
					<p>c o n t a c t</p>
				</div>
				
				<div className="contact-content">
					<div className="email">
						<a href='mailto:bae.annie@gmail.com'>say hello</a>
					</div>
					<Map center={location} markers={markers} />
					
				</div>

			</div>
		)
	}
}

export default Contact