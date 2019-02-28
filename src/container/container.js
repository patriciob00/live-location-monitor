import React, { Component } from 'react';
import { MapComponent, ControlsBar, LoadingModal, ConfirmModal, NotFoundModal, HelpModal } from '../components/index';
import { getLocationsOptions, getLatLongFromNominatim } from '../services/commom-functions';

import './container.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsFound: [],
      searchValue: '',
      loadingText: 'searching place',
      currentLatLong: [],
      markers: [],
      notFoundCoordinates: false,
      currentName: '',
      currentCenter: null,
      currentIdxToDelete: null,
      showModal: false,
      showConfirmModal: false,
      showDeleteModal: false,
      showLoading: false,
      showHelpModal: false,
      
    }
  }


  getLocationOptions = async ({ target }) => {
    this.setState({ searchValue: target.value }, async ()=> {
      const keyChars = target.value.split(',');
      let key = "";
      if( keyChars.length > 1) {
        key = keyChars[1];
      } else {
        key = keyChars[0];
      }
      const { data } = await getLocationsOptions(key.trim());
      if( data.data.findLocation ) {
        this.setState({ locationsFound: data.data.findLocation })
      }
    })
  }

  initSearchByLocation = async () => {
    const { searchValue } = this.state;
    if( searchValue !== '' ) {
      this.setState({ showLoading: true, loadingText: 'searching place'})
      const { data } = await getLatLongFromNominatim(searchValue);
      if( data.length > 0 ) {
        this.setState({ showLoading: false }, () => this.setState({ showConfirmModal: true, currentLatLong: [data[0].lat, data[0].lon], currentName: data[0]['display_name'] }))
      } else {
        this.setState({ showLoading: false}, () => this.setState({ notFoundCoordinates: true }))
      }
    }
  }

  toggleHelpScreen = () => {
    this.setState({ showHelpModal: !this.state.showHelpModal })
  }

  setMapCenter = latLong => {
    this.setState({ currentCenter: latLong })
  } 

  creatingPinProcess = (latlong, callback) => {
    const { searchValue, locationsFound, currentName } = this.state;
    let currentMarker  = { latlong, name: currentName, available: false };

    locationsFound.forEach(el => {
      if( searchValue.indexOf(el.zipCode) !== -1 || searchValue.indexOf(el.city) !== -1 ) {
        currentMarker.available = el.available;
        currentMarker.name = `${el.zipCode}, ${el.city} - ${el.province}`
      }
    });

    this.setState({ markers: [...this.state.markers,  currentMarker], currentCenter: currentMarker.latlong }, ()=> callback() )

  }

  creatingPinPoint = () => {
    const { currentLatLong } = this.state;
    this.setState({ showConfirmModal: false }, 
      ()=> this.setState({ showLoading: true, loadingText: 'Please wait, Preparing marking'}, ()=> {
        this.creatingPinProcess(currentLatLong, ()=> this.setState({ currentLatLong: [], showLoading: false }))
      }))
  }

  deletePinPoint = idx => {
    this.setState({ showDeleteModal: true, currentIdxToDelete: idx })
  }

  pinShouldBeDeleted = () => {
    const { markers, currentIdxToDelete } = this.state;
    const newMarkers = [...markers].filter(( el,idx ) => idx !== currentIdxToDelete )

    this.setState({ markers: newMarkers, showDeleteModal: false });
  }


  // close modals functions
  closeConfirmModal = () => { 
    this.setState({ showConfirmModal: false, currentLatLong: [] })
  }

  closeNotFoundModal = () => {
    this.setState({ notFoundCoordinates: false })
  }

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false })
  }

  closeHelpModal = () => {
    this.setState({ showHelpModal: false })
  }

  render() {
    const { 
      searchValue, locationsFound, showConfirmModal, showLoading, showHelpModal,
      loadingText, notFoundCoordinates, markers, currentCenter, showDeleteModal
    } = this.state;
    return (
      <div className='container-wrapper'>

        {/* screen controls */}
        <ControlsBar
          doesThePlaceSearching={ this.initSearchByLocation } deletePin={ this.deletePinPoint }
          inputSearchValue={ searchValue } markers={ markers } onChangeInput={ this.getLocationOptions } 
          locationsFound={ locationsFound } openHelp={ this.toggleHelpScreen } setMapCenter={ this.setMapCenter }

        />

        {/* map */}
        <MapComponent latLongCenter={ currentCenter }  markers={ markers }/>

        {/* modals */}
        <ConfirmModal onOk={ this.creatingPinPoint } onClose={ this.closeConfirmModal } show={ showConfirmModal } text={'Do you want to put a pin in this place?'} />
        <ConfirmModal onOk={ this.pinShouldBeDeleted } onClose={ this.closeDeleteModal } show={ showDeleteModal } text={'Do you really want to delete this pin ?'} />
        <LoadingModal show={ showLoading } text={ loadingText } />
        <NotFoundModal show={ notFoundCoordinates } onClose={ this.closeNotFoundModal } />
        <HelpModal show={ showHelpModal } onclose={ this.closeHelpModal } />
      </div>
    )
  }
}

export default Container;
