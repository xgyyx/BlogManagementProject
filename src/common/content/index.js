import React, {PureComponent} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Breadcrumb} from 'antd';
import {ContentWrapper, MainContentWrapper, BreadcrumbWrapper} from './style';

import Article from '../../pages/Article';

class Content extends PureComponent {
  render () {
    console.log(this.props.breadcrumbList);
    const {breadcrumbList} = this.props;

    return (
      <ContentWrapper>
        <BreadcrumbWrapper>
          {
            breadcrumbList.map((item, index) => (
              (breadcrumbList.size === index + 1) ?
              <Breadcrumb.Item key={index}>{item.get('title')}</Breadcrumb.Item> :
              <Breadcrumb.Item key={index}><Link to={item.get('link')}>{item.get('title')}</Link></Breadcrumb.Item>
            ))
          }
        </BreadcrumbWrapper>
        <BrowserRouter>
          <MainContentWrapper>
            <Route path='/' component={Article}></Route>
          </MainContentWrapper>
        </BrowserRouter>
      </ContentWrapper>
    )
  }
};

const mapState = (state) => ({
  breadcrumbList: state.getIn(['content', 'breadcrumb'])
});

export default connect(mapState, null)(Content);