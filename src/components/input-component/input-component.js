import React, { Component } from 'react';
import SvgIcon from '../../utils/svg-component';

import './input-component.scss'

class InputComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputOpened: false
    }
  }

  toggleInputOpened = () => {
    this.setState({ inputOpened: !this.state.inputOpened })
  }

  verifyOnKeyPress = ev => {
    if(ev.key === 'Enter') {
      this.props.doSearching();
    }
  }
  
  
  render() {
    const { locationsList = [], onchange = () => null , value = '', className = '', style= {} } = this.props;
    const { inputOpened } = this.state;

    return (
      <section className={`input-wrapper ${ className }`} style={ style }>
        <section className='input-elements'>
          <div className={`trigger ${ inputOpened ? 'rotate' : '' }`} onClick={ this.toggleInputOpened }>
            <SvgIcon name="icon-add" width="44"/>
          </div>
          <input onKeyPress={ this.verifyOnKeyPress } value={ value } className={`${ !inputOpened ? 'closed': '' }`} placeholder="search your location" type='text' list='locations' id='location' onChange={ onchange } />
          <datalist id='locations'>
            { locationsList.map( (location, idx ) => (
                <option key={ idx } value={ `${location.zipCode}, ${location.city}, ${location.province}` } />
            ))}
          </datalist>
        </section>
      </section>
    );
  }
}

export default InputComponent;