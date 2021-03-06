import React from 'react';
import Sidebar from './Sidebar'
import {searchNearby} from '../../utils/googleApiHelpers'

class MapSidebarContainer extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
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
            content: '318 Wahsatch Avenue, Colorado Springs, CO 80903',	
            moreinfo: 'link here?'	
          }]	
    }
  }
  render() {
    const markers = this.state.markers;
    return (
      <div>
      <h2>Restaurants</h2>
      {markers.map((marker, index) => (
        <Sidebar key={marker.id} number={index+1} markerAddress={marker.address} markerName={marker.id}/>
      ))}
      </div>
    )
  }
}

export default MapSidebarContainer