
import React from 'react';
import Map from './Map'

export default class MapContainer extends React.Component {
	
	render() {
		return (
			<div>
				<div className="row notificationBar primary-alert"></div>
				<div className="row justify-content-left">
					<div className="col-sm-3 sidebar">
						<p className="border-bottom">Restaurants</p>
					</div>
					<div className="col-sm-9 main-map-right" align="left">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=placeholder&libraries=geometry,drawing,places"
            center={{ lat: 39.265943, lng: -104.931300 }}
						zoom={8.4}
            loadingElement={<div style={{ height: '100%', width: '100%' }} />}
            containerElement={<div style={{ height: '900px', width: '100%' }} />}
						mapElement={<div style={{ height: '100%' }} />}
						isMarkerShown={false}
						/>
					</div>
				</div>
			</div>
		)
	}
}

