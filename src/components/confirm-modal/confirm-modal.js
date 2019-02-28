import React from 'react';
import ModalBase from '../modal-base/modal-base';

import './confirm-modal.scss'

const ConfirmModal = ({ show=false, onClose, text='', onOkText='Ok', onCancelText='Cancel', onOk= ()=> null , onCancel }) => (
  <ModalBase ContentClassName='confirm-content' show={ show } onClose={ onClose }>
      <section className='body-wrapper'>
        <section className='text-section'>{text }</section>
        <section className='footer-section'>
          <button onClick={ onCancel ? onCancel: onClose }>{ onCancelText }</button>
          <button onClick={ onOk }>{ onOkText }</button>
        </section>
      </section>
  </ModalBase>
)

export default ConfirmModal;