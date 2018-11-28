import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';

const entitiesReducer = combineReducers({
  users,
  products
});

export default entitiesReducer;
