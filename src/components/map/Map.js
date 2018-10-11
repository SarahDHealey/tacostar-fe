import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {camelize} from '../../lib/String';

const evtNames = ['ready', 'click', 'dragend'];

//googleApi component loads to the screen
//googleApi component creates a google map component
/*googleApi component then passes that google map component
to this Map component as a prop*/

/*Because we wrap the Map parent, the MapContainer 
component, with the googleApi*/
//we can check for either a new prop
/*or we can check to see if the component has mounted
*to see if/when we get a link to the window.google library*/

class Map extends React.Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat, 
        lng: lng
      }
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          })
        })
      }
    }
    this.loadMap();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
//recenterMap fn
  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }
//renderChildren fn
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

//run the gapi functions to create the map
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      
      /*grab a reference to the DOM component
      where we want to place the map*/
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const curr = this.state.currentLocation;
      const center = new maps.LatLng(curr.lat, curr.lng);
      
      //use default props from below
      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      //the maps.Map() constructor
      this.map = new maps.Map(node, mapConfig);
      
      //events
      //rename events like click to onClick
      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });
      maps.event.trigger(this.map, 'ready');
      this.forceUpdate();
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = `on${camelize(evtName)}`;

    return e => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    };
  }
/*grab a reference to the DOM component
where we want the map to be placed*/
//this references the div in our render with ref='map'

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div ref='map' style={style} >
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  onMove: PropTypes.func
}

evtNames.forEach(e => (Map.propTypes[camelize(e)] = PropTypes.func));

Map.defaultProps = {
  zoom: 7,
  initialCenter: {
    lat: 39.265943,
    lng: -104.931300
  },
  centerAroundCurrentLocation: false,
  onMove: function() {}
}


export default Map;