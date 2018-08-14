import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import {Menu, Icon} from 'antd';
import {LogoWrapper, NavBarWrapper, ButtonWrapper, CollapsedButton} from './style';


class NavBar extends Component {
  render () {
    return (
      <NavBarWrapper collapsible collapsed={this.props.collapsed} onCollapse={this.props.changeCollapsed}>
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
        <ButtonWrapper>
          <CollapsedButton type='primary' onClick={this.props.changeCollapsed}>
            <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </CollapsedButton>
        </ButtonWrapper>
      </NavBarWrapper>
    )
  }
};

const mapState = (state) => ({
  collapsed: state.getIn(['navBar', 'collapsed'])
});

const mapDispatch = (dispatch) => ({
  changeCollapsed () {
    dispatch(actionCreators.changeCollapsedAction());
  }
});

export default connect(mapState, mapDispatch)(NavBar);