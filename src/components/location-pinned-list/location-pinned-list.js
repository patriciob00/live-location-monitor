import React, { Component } from 'react'
import SvgIcon from '../../utils/svg-component';

import './location-pinned-list.scss'

class LocationPinnedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedList: false,
      selected: null,
    }
  }

  triggerList = () => {
    const { markers } = this.props;

    if( markers.length > 0 ) {
      this.setState({ openedList: !this.state.openedList })
    }
  }

  changeSelected = (idx, latLong) => {
    if( idx === this.state.selected ) {
      this.setState({ selected: null })

      if( typeof this.props.setMapCenter === 'function') {
        this.props.setMapCenter(null);
      }

    } else {
      if( typeof this.props.setMapCenter === 'function') {
        this.props.setMapCenter(latLong);
      }

      this.setState({ selected: idx })
    }
  }

  deletePin = (event, idx ) => {
    event.stopPropagation()
    if( typeof this.props.deletePin === 'function') {
      this.props.deletePin(idx);
    }
  }


  renderLocations = data => {
    const { selected } = this.state;
    return data.map(( el, idx ) => (
      <div 
        key={ idx } onClick={ ()=> this.changeSelected(idx, el.latlong) }
        className={`pin-points ${ el.available ? 'available': '' } ${ idx === selected ? 'selected': '' }`}
      >
        <SvgIcon name='icon-pin-point'/>
        <section className='info'>
          <div>{ el.name }</div>
        </section>
        <div className='delete-section' onClick={ event => this.deletePin(event, idx) }>
          <SvgIcon name='icon-trash' />
        </div>
        { idx === selected &&  <SvgIcon classDiv="selected-star" name='icon-start' /> }
      </div>
    ))
  }
  

  render() {
    const { openedList } = this.state;
    const { markers } = this.props;

    return (
      <section className={`location-wrapper ${ markers.length === 0 ? 'disabled': '' }`}>
        <div className='location-header' onClick={ this.triggerList }>
            <SvgIcon name='icon-pin-point' />
        </div>
        <section className={`locations-list-block ${ markers.length !== 0 ? openedList ? 'opened' : '' : '' }`} >
            { this.renderLocations(markers)}
        </section>
        
      </section>
    )
  }
}

export default LocationPinnedList;
