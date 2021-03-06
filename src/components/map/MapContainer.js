import React from 'react';
import Map from './Map';
import * as config from '../../config'
import GoogleApiComponent from './GoogleApiComponent'
import MapSidebarContainer from './MapSidebarContainer'
import {InfoWindow} from './InfoWindow';
import { PlaceMarker } from './PlaceMarker';



export class MapContainer extends React.Component {
  constructor(props) {	
    super(props)	
     this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},	
      markers: [{	
        id: 'Longmont',	
        area: 'Denver',	
        longitude: -105.101842,	
        latitude: 40.194512,	
        address: '2020 Main St',
        city: 'Longmont',
        state: 'CO',
        zipcode: 80501,	
        content: 'hi'	
      },	
      {	
        id: 'Northglenn',	
        area: 'Denver',	
        longitude: -104.999447,	
        latitude: 39.884618,	
        address: '1050 W 104th Ave #8',
        city: 'Northglenn',
        state: 'CO',
        zipcode: 80234,
        content: '1050 W 104th Ave #8, Northglenn, CO 80234'	
      },	
      {	
        id: 'Thornton',	
        area: 'Denver',	
        longitude: -104.980506,	
        latitude: 39.849385,	
        address: '503 E 84th Ave',
        city: 'Thornton',
        state: 'CO',
        zipcode: 80229,
        content: '503 E 84th Ave, Thornton, CO 80229'	
      },	
      {	
        id: 'Aurora',	
        area: 'Denver',	
        longitude: -104.865299,	
        latitude: 39.684654,	
        address: '1760 S. Havana St',
        city: 'Aurora',
        state: 'CO',	
        zipcode: 80014,	
        content: '1760 S. Havana St. Aurora, Colorado 80014'	
      },	
      {	
        id: 'Rangewood',	
        area: 'Colorado Springs',	
        longitude: -104.757153,	
        latitude: 38.939096,	
        address: '7434 Rangewood Dr',
        city: 'Colorado Springs',
        state: 'CO',	
        zipcode: 80920,	
        content: '7434 Rangewood Dr, Colorado Springs, CO 80920'	
      },	
      {	
        id: 'Fillmore',	
        area: 'Colorado Springs',	
        longitude: -104.805729,	
        latitude: 38.874259,	
        address: '1190 E Fillmore St',
        city: 'Colorado Springs',
        state: 'CO',	
        zipcode: 80907,	
        content: '1190 E Fillmore St, Colorado Springs, CO 80907'	
      },	
      {	
        id: 'Circle',	
        area: 'Colorado Springs',	
        longitude: -104.775584,	
        latitude: 38.841359,	
        address: '605 N Circle Dr',
        city: 'Colorado Springs',
        state: 'CO',	
        zipcode: 80909,	
        content: '605 N Circle Dr, Colorado Springs, CO 80909'	
      },	
      {	
        id: 'Wahsatch',	
        area: 'Colorado Springs',	
        longitude: -104.818083,	
        latitude: 38.838526,	
        address: '318 Wahsatch Avenue',
        city: 'Colorado Springs',
        state: 'CO',
        zipcode: 80903,	
        content: '318 Wahsatch Avenue, Colorado Springs, CO 80903',	
        moreinfo: 'link here?'	
      }]	
    }	
  }
  onMapClick() {
      console.log('onMapClickHappened!!!******')
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
      return
  }
  onDragend() {
    console.log('onMapDragHappened!!!******')
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
    return
}
  getInitialState() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  handleInfoWindowClose() {
    this.setState({ activeMarker: null })
    return
  }

  handleMarkerClick = ((props,marker,e) => {
    console.log('marker', marker)
    console.log('props',props)
    console.log("state active marker",this.state.activeMarker)
    console.log('infowindow raw? ',InfoWindow);
    
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  })

  render() {
    const markers = this.state.markers;
    if (!this.props.loaded) {
      console.log('hi')
      return <div>Loading...</div>
    }
    const style = {
      width: '100vw',
      height: '100vh'
    }
    /*Marker components 
    are children of the Map component*/
    return (
      <div>
        <div className="row notificationBar primary-alert"></div>
        <div className="row justify-content-left">
          <div className="col-sm-3 sidebar">	
              <MapSidebarContainer/>	
          </div>
          <div className="col-sm-9 main-map-right" align="left">
            <Map google={this.props.google}
                 onClick={this.onMapClick.bind(this)}
                 onDragend={this.onDragend.bind(this)}
            >
            {markers.map(marker => (
              <PlaceMarker
              key={marker.id}
              name={marker.id}
              address={marker.address}
              city={marker.city}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              onClick={this.handleMarkerClick}
              />
            ))}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onInfoWindowClose}>
                <div className="height-container">
                  <div className="left-box">
                  test
                  </div>
                  <div>
                    <p className="right-box">
                    test
                    </p>
                  </div>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    )
  }
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)

