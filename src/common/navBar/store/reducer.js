import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultStore = fromJS({
  collapsed: false
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.CHANGE_COLLAPSED_ACTION:
     return state.set('collapsed', !state.get('collapsed'));
  }
};