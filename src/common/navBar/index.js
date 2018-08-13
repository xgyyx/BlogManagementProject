import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {LogoWrapper, NavBarWrapper} from './style';


class NavBar extends Component {
  render () {
    return (
      <NavBarWrapper>
        <LogoWrapper className='logo'>Johnathon Yao</LogoWrapper>
        <Menu theme='dark' mode='inline' className='MenuWrapper'>
          <Menu.Item>
            <Icon type='edit'></Icon>
            <span>文章管理</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type='edit'></Icon>
            <span>文章管理</span>
          </Menu.Item>
        </Menu>
      </NavBarWrapper>
    )
  }
};

export default NavBar;