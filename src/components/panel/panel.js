import React, { Component } from 'react';

import './panel.scss';

class Panel extends Component {


  render() {
    const { title, children, opened, panelClick = ()=> null } = this.props;

    return (
      <div className='panel-custom'>
        <section className='panel-header' onClick={ panelClick }>{ title }</section>
        <section className={`panel-body ${ opened ? 'open': '' }`}>
          { children }
        </section>
      </div>
    );
  }
}

export default Panel;