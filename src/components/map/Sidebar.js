import React from 'react';
import {searchNearby} from '../../utils/googleApiHelpers'

class Sidebar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			address: this.props.markerAddress
    }
  }
  render() {
		const address = this.state.address;
    return (
			<div>
				<h1>{address}</h1>
			</div>
    )
  }
}

export default Sidebar;