import React, { Component } from 'react';
import { ModalBase, Panel } from '../index';
import SvgIcon from '../../utils/svg-component';

import './help-modal.scss';

const Panels = [
  { title: 'How to search a place', content: 'To search for a place, you first have to open the input box, using the `add` button in the middle left of the screen, then enter some text and see the options that will appear, after finishing typing or select one of the options, just click on enter and follow the messages on the screen.'},
  { title: 'Toggling between the places pinned', content: 'Open the list of Pinned places, by using the icon `pin button` below input box, once you click  it, a box with all pinned places will appear, just click on a place and map will be centered on it.' },
  { title: 'Deleting a place pinned', content: 'Open the list of fixed places by using the icon `pin button` below the input box, after clicking on it, a box with all the fixed places will appear, just click on a trash can to the right of each place and follow the steps that will appear on the screen.'}
]

class HelpModal extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      opened: false,
      currentOpened: null,
    }
  }

  changeOpened = idx => { 
    if( idx === this.state.currentOpened ) {
      this.setState({ currentOpened: null })
    } else {
      this.setState({ currentOpened: idx })
    }
  }

  createPanels = () => {
    const { currentOpened } = this.state;
    return Panels.map(( e, idx ) => (
      <Panel key={ idx } title={ e.title } panelClick={ ()=> this.changeOpened(idx) } opened={ currentOpened === idx ? true : false }>
        { e.content }
      </Panel>
      ))
  }
  
  
  render() {
    const { show= false, onclose = () => null } = this.props;

    return (
      <ModalBase ClassName='help-modal' ContentClassName='loading-content' show={ show } onClose={ onclose }>
          <section className="modal-header">
              <div className='title'>Help section</div>
              <SvgIcon onClick={ onclose}  classDiv='help-close-icon' name='icon-close' />
          </section>
          <section className="modal-body">
              { this.createPanels() }
          </section>
      </ModalBase>
    );
  }
}

export default HelpModal;