import React from 'react';
import { Marker } from 'react-google-maps';
import { InfoWindow } from 'react-google-maps'

export class PlaceMarker extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      isOpen: false,
      markers: this.props.markers
    }
  }
  
  handleInfoWindowClose() {
      this.setState({ activeMarker: null })
      return
  }

	handleMarkerClick(marker) {
    // console.log(this.state.activeMarker)
		this.setState({
			activeMarker: {
				lat: marker.latitude,
				lng: marker.longitude
      },
      activeContent: marker.content
		})
	}

  render() {
    const markers = this.state.markers
	
    return(
			<div>
				{markers.map(marker => (
					<Marker
					key={marker.id}
					position={{ lat: marker.latitude, lng: marker.longitude }}
          onClick={() => this.handleMarkerClick(marker)}
          />
        ))}
        {this.state.activeMarker &&
          <InfoWindow 
            position={this.state.activeMarker}
            options={{pixelOffset: new google.maps.Size(0,-30)}}
            onCloseClick={() => this.handleInfoWindowClose()}
            >
        <div>
          <h5>{this.state.activeContent}</h5>
        </div>
      </InfoWindow>}
			</div>
    );
  }
}

export default PlaceMarker