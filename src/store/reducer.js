import {combineReducers} from 'redux-immutable';

import {reducer as navBarReducer} from '../common/navBar/store';
import {reducer as contentReducer} from '../common/content/store';

const reducer = combineReducers({
  navBar: navBarReducer,
  content: contentReducer
});

export default reducer;