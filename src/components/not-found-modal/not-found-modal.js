import React from 'react';
import ModalBase from '../modal-base/modal-base';
import SvgIcon from '../../utils/svg-component';

import './not-found-modal.scss'

const NotFoundModal = ({ show=false, onClose, text="Sorry, we can't get the coordinates of this place" }) => (
  <ModalBase ContentClassName='confirm-content' show={ show } onClose={ onClose }>
      <section className='body-wrapper not-found' onClick={ onClose }>
        <SvgIcon classDiv='close-wrapper' name="icon-close"/>
        <div className='icon-wrapper'>
          <SvgIcon name='icon-sad-baby'/>
        </div>
        <div className='not-found-message'>
          { text }
        </div>
      </section>
  </ModalBase>
)

export default NotFoundModal;