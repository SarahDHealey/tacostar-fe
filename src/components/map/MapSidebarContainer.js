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
      {markers.map(marker => (
        <Sidebar key={marker.id} markerAddress={marker.address}/>
      ))}
      </div>
    )
  }
}

export default MapSidebarContainer