import React from 'react';
import Map from './Map';
import MapSidebarContainer from './MapSidebarContainer';

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      isOpen: false,
      markers: [{
        id: 'Longmont',
        area: 'Denver',
        longitude: -105.101842,
        latitude: 40.194512,
        address: '2020 Main St, Longmont, CO 80501',
        zipcode: 80501,
        content: '2020 Main St, Longmont, CO 80501'
      },
      {
        id: 'Northglenn',
        area: 'Denver',
        longitude: -104.999447,
        latitude: 39.884618,
        address: '1050 W 104th Ave #8, Northglenn, CO 80234',
        content: '1050 W 104th Ave #8, Northglenn, CO 80234'
      },
      {
        id: 'Thornton',
        area: 'Denver',
        longitude: -104.980506,
        latitude: 39.849385,
        address: '503 E 84th Ave, Thornton, CO 80229',
        content: '503 E 84th Ave, Thornton, CO 80229'
      },
      {
        id: 'Commerce City',
        area: 'Denver',
        longitude: -104.932156,
        latitude: 39.805255,
        address: '4850 E 60th Ave, Commerce City, CO 80022',
        zipcode: 80022,
        content: '4850 E 60th Ave, Commerce City, CO 80022'
      },
      {
        id: 'Aurora',
        area: 'Denver',
        longitude: -104.865299,
        latitude: 39.684654,
        address: '1760 S. Havana St. Aurora, Colorado 80014',
        zipcode: 80022,
        content: '1760 S. Havana St. Aurora, Colorado 80014'
      },
      {
        id: 'Rangewood',
        area: 'Colorado Springs',
        longitude: -104.757153,
        latitude: 38.939096,
        address: '7434 Rangewood Dr, Colorado Springs, CO 80920',
        zipcode: 80920,
        content: '7434 Rangewood Dr, Colorado Springs, CO 80920'
      },
      {
        id: 'Academy',
        area: 'Colorado Springs',
        longitude: -104.765754,
        latitude: 38.901217,
        address: '4701 Academy Blvd Colorado Springs, CO 80918',
        zipcode: 80918,
        content: '4701 Academy Blvd Colorado Springs, CO 80918'
      },
      {
        id: 'Fillmore',
        area: 'Colorado Springs',
        longitude: -104.805729,
        latitude: 38.874259,
        address: '1190 E Fillmore St, Colorado Springs, CO 80907',
        zipcode: 80907,
        content: '1190 E Fillmore St, Colorado Springs, CO 80907'
      },
      {
        id: 'Circle',
        area: 'Colorado Springs',
        longitude: -104.775584,
        latitude: 38.841359,
        address: '605 N Circle Dr, Colorado Springs, CO 80909',
        zipcode: 80909,
        content: '605 N Circle Dr, Colorado Springs, CO 80909'
      },
      {
        id: 'Wahsatch',
        area: 'Colorado Springs',
        longitude: -104.818083,
        latitude: 38.838526,
        address: '318 Wahsatch Avenue, Colorado Springs, CO 80903',
        zipcode: 80903,
        content: '318 Wahsatch Avenue, Colorado Springs, CO 80903'
      }]
    }
  }
  
  
  render() {
    const markers = this.state.markers
    return (
      <div>
        <div className="row notificationBar primary-alert"></div>
        <div className="row justify-content-left">
          <div className="col-sm-3 sidebar">
            <MapSidebarContainer markers={markers}/>
          </div>
          <div className="col-sm-9 main-map-right" align="left">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=placeholder&libraries=geometry,drawing,places"
            center={{ lat: 39.265943, lng: -104.931300 }}
            zoom={8.4}
            loadingElement={<div style={{ height: '100%', width: '100%' }} />}
            containerElement={<div style={{ height: '900px', width: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            markers={markers}
            />
          </div>
        </div>
      </div>
    )
  }
}

