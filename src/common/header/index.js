import React, {Component} from 'react';
import {HeaderWrapper, HeaderContainer} from './style';

class Header extends Component {
  render () {
    return (
      <HeaderWrapper style={{padding: 0}}>
        <HeaderContainer></HeaderContainer>
      </HeaderWrapper>
    )
  }
};

export default Header;