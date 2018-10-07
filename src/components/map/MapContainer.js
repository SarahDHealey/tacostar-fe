import React from 'react';
import Map from './Map';
import * as config from '../../config'
import GoogleApiComponent from './GoogleApiComponent'


export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      console.log('hi')
      return <div>Loading...</div>
    }
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
      <Map google={this.props.google} />
      </div>
    )
  }
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
