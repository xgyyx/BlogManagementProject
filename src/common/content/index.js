import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {ContentWrapper, MainContentWrapper} from './style';

class Content extends Component {
  render () {
    return (
      <ContentWrapper>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
        </Breadcrumb>
        <MainContentWrapper>665</MainContentWrapper>
      </ContentWrapper>
    )
  }
};

export default Content;