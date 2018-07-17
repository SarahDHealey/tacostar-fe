import React from 'react';
import Sidebar from './Sidebar'
import {searchNearby} from '../../utils/googleApiHelpers'

class MapSidebarContainer extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      markers: this.props.markers
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