import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceMarker from './PlaceMarker'
class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      isOpen: false,
      markers: this.props.markers
    }
  }
  mapMoved() {
    console.log('mapMoved:'+ JSON.stringify(this.state.map.getCenter()))
  }
  mapLoaded(map) {
    if (this.state.map != null) 
      return 
      this.setState({
        map: map
      })
  }
  render() {
    const markers = this.state.markers;
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <PlaceMarker markers={markers}/>
      </GoogleMap>
    )
  }
}
export default withGoogleMap(Map)