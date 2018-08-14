import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {ArticleWrapper} from './style';

class Article extends PureComponent {
  render () {
    return (
      <ArticleWrapper>666</ArticleWrapper>
    )
  }
};

const mapState = (state) => ({});

const masDispatch = (dispatch) => ({});

export default connect(mapState, masDispatch)(Article);