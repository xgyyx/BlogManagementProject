import React, {Component} from 'react';
import {Layout} from 'antd';

const { Footer } = Layout;

class FooterPart extends Component {
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Blog Management System ©2018 Created by Johnathon Yao
      </Footer>
    )
  }
};

export default FooterPart;