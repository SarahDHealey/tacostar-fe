
import React from 'react';
import Map from './Map'

export default class MapContainer extends React.Component {
	
	render() {
		return (
			<div>
				<div className="row justify-content-left">
					<div className="col-sm-5 main-map-left">
						<p>List of Restaurants</p>
					</div>
					<div className="col-sm-5 main-map-right" align="center">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=placeholder&libraries=geometry,drawing,places"
            center={{ lat: 39.7488462, lng: -104.8582643 }}
            zoom={8}
            loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
            containerElement={<div style={{ height: `700px`, width: '60%' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
					</div>
				</div>
			</div>
		)
	}
}

