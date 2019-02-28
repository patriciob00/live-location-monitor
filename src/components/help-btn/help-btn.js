import React from 'react';
import SvgIcon from '../../utils/svg-component';

import './help-btn.scss'

const HelpButton = ({onclick = ()=> null , style = {} , ClassName = '', children}) => (
  <div className={`help-btn ${ ClassName }`} style={ style } onClick={ onclick }>
    { children ? children :
      <SvgIcon name='icon-help' width="44" />
     }
  </div>
)

export default HelpButton;

