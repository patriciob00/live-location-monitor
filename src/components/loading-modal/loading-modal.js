import React from 'react';
import ModalBase from '../modal-base/modal-base';

import './loading-modal.scss'

const LoadingModal = ({ show=false, text='' }) => (
  <ModalBase ClassName='loading-modal' ContentClassName='loading-content' show={ show } onClose={ ()=> null }>
      <section className='loader-wrapper'>
        <section className='loader-section'>
          <div className='loader' />
        </section>
        <section className='info-section'>{ text }</section>
      </section>
  </ModalBase>
)

export default LoadingModal;