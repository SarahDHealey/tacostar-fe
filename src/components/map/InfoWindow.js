import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'


export class InfoWindow extends React.Component {
  componentDidMount() {
    this.renderInfoWindow();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }
    if ((this.props.visible !== prevProps.visible) ||
    (this.props.marker !== prevProps.marker)) {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }
    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }
  }
  updateContent() {
    const content = this.renderChildren();
    this.infowindow
      .setContent(content);
  }
  openWindow() {
    this.infowindow
      .open(this.props.map, this.props.marker);
  }
  closeWindow() {
    this.infowindow.close();
  }
  renderChildren() {
    const {children} = this.props;
    return ReactDOMServer.renderToString(children);
  }
  renderInfoWindow() {
    let {map, google, mapCenter} = this.props;

    const iw = this.infowindow = new google.maps.InfoWindow({
    });
  }
  render() {
    return null;
  }
}