import React, { Component } from 'react';
import { InputComponent, LocationPinnedList, HelpButton } from '../index';

import './controls-bar.scss';

class TopControls extends Component {


  render() {
    const { onChangeInput, locationsFound, inputSearchValue, doesThePlaceSearching, openHelp, markers, setMapCenter, deletePin } = this.props;

    return (
      <div className='controls-wrapper'>
        <InputComponent doSearching={ doesThePlaceSearching } value={ inputSearchValue } onchange={ onChangeInput } locationsList={ locationsFound } />
        <LocationPinnedList deletePin={ deletePin } markers={ markers } setMapCenter={ setMapCenter } />
        <HelpButton onclick={ openHelp }  />  
      </div>
    );
  }
}

export default TopControls;