import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends React.Component {

  constructor() {
    super()
    this.state = {
      map: null,
    }
  }

  mapMoved() {
    console.log('mapMoved:'+ JSON.stringify(this.state.map.getCenter()))
  }

  mapLoaded(map) {
    if (this.state.map != null) 
      return 
      this.setState({
        map:map
      })
  }

  handleMarkerClick = () => {
    console.log('markerClicked:')
    return this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const markers = [{
      id: 'Longmont',
      longitude: -105.101842,
      latitude: 40.194512,
      zipcode: 80501
    },
    {
      id: 'Northglenn',
      longitude: -104.999447,
      latitude: 39.884618
    },
    {
      id: 'Thornton',
      longitude: -104.980506,
      latitude: 39.849385
    },
    {
      id: 'Commerce City',
      longitude: -104.932156,
      latitude: 39.805255,
      zipcode: 80022
    },
    {
      id: 'Aurora',
      longitude: -104.865299,
      latitude: 39.684654,
      zipcode: 80022
    },
    {
      id: 'Rangewood',
      longitude: -104.757153,
      latitude: 38.939096,
      zipcode: 80920
    },
    {
      id: 'Academy',
      longitude: -104.765754,
      latitude: 38.901217,
      zipcode: 80918
    },
    {
      id: 'Fillmore',
      longitude: -104.805729,
      latitude: 38.874259,
      zipcode: 80907
    },
    {
      id: 'Circle',
      longitude: -104.775584,
      latitude: 38.841359,
      zipcode: 80909
    },
    {
      id: 'Wahsatch',
      longitude: -104.818083,
      latitude: 38.838526,
      zipcode: 80903
    }

  ]

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      
      {markers.map(marker => (
        <Marker
        key={marker.id}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        onClick={this.handleMarkerClick.bind(this)}
        >
          {this.state.isOpen && <InfoWindow onCloseClick={this.handleMarkerClick}>
          <div>Hello</div></InfoWindow>}
        </Marker>
      ))}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
