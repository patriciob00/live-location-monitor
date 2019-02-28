import React, { Component } from 'react'

import './modal-base.scss';

class ModalBase extends Component {

  componentDidMount() {
    if (this.props.onClose) {
        window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
      if (this.props.onClose) {
          window.removeEventListener('keydown', this.listenKeyboard, true);
      }
  }

  listenKeyboard = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
        this.props.onClose();
    }
  }

  onOverlayClick = (event) => {
      this.props.onClose();
      event.stopPropagation();
  }

  static onDialogClick = (event) => {
      event.stopPropagation();
  }

  render() {
    const { ClassName = '', ContentClassName = '', children, show= false, style={}, contentStyle={} } = this.props;

    return (
      <div className={`modal-base ${ ClassName } ${ show ? 'show' : ''}`} style={ style } onClick={ this.onOverlayClick }>
        <div className={`modal-content ${ ContentClassName }`} onClick={ ModalBase.onDialogClick } style={ contentStyle } >
          { children && children }
        </div>
      </div>
    )
  }
}

export default ModalBase
