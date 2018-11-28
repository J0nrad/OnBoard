import { combineReducers } from 'redux'
import { sessionsErrorsReducer } from './sessions_errors_reducer';
import  ProductsErrorsReducer  from './products_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionsErrorsReducer,
  products: ProductsErrorsReducer
})

export default errorsReducer;
