import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import chats from './chats_reducer';

const entitiesReducer = combineReducers({
  users,
  products,
  chats,
});

export default entitiesReducer;
