import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { AvailableMarker, NotAvailableMarker } from '../pin-component/pin-component';

import './map-component.scss';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latLong: { lat: 48.210033, lng: 16.363449 },
      zoom: 13,
    }
    this.currentMap = React.createRef();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.latLongCenter !== prevProps.latLongCenter ) {
      if( this.props.latLongCenter !== null ) {
        this.currentMap.leafletElement.flyTo(this.props.latLongCenter)
      } else { 
        this.currentMap.leafletElement.flyTo([48.210033, 16.36344 ])
      }
    }
  }

  returnMarkers = () => {
    const { markers } = this.props;
    return markers.map(( e,i ) => {
      const Icon = !e.available ? AvailableMarker : NotAvailableMarker;

      return (
        <Marker key={`mark-${i}`} position={ e.latlong } icon={ Icon }>
          <Popup>
            <section className='tag-popup'>
              <div className='tag-text'>{ e.name }</div>
              <div className={`tag-available ${ !e.available ? 'not': ''}`}>{ e.available ? 'Service Available' : 'Service is not Available'}</div>
            </section>
          </Popup>
        </Marker>
      )
    })
  }
  
  render() {

    const { latLong, zoom } = this.state;
    const Markers = this.returnMarkers();
    
    return (
      <Map ref={ map => this.currentMap = map } animate={ true } center={ latLong } zoom={zoom} >
        <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { Markers }
      </Map>
    );
  }
}

export default MapComponent;