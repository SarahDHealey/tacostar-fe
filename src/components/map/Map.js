import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      
      let zoom = 8.4;
      let lat = 39.265943;
      let lng = -104.931300;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
      })
      this.map = new maps.Map(node, mapConfig);
      console.log("Setting map on " + this.map)
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div ref='map' style={style} >
        Loading map...
      </div>
    )
  }
}

export default Map;