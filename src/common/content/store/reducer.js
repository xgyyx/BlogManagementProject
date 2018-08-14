import {fromJS} from 'immutable';

const defaultState = fromJS({
  breadcrumb: [{
    title: '首页',
    link: '/'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};