import React from 'react';
import {searchNearby} from '../../utils/googleApiHelpers'

class Sidebar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			address: this.props.markerAddress,
			name: this.props.markerName,
			number: this.props.number
    }
  }
  render() {
		const address = this.state.address;
		const name = this.state.name;
		const number = this.state.number;

    return (
			<div className='markerAddressUnits border-top'>
				<p className='markerAddressNotes'>{number}. {name}</p>
				<p className='markerAddressNotes'>{address} <br />more info</p>
			</div>
    )
  }
}

export default Sidebar;