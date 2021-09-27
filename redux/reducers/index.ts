import {combineReducers} from 'redux';

import {productsReducer} from './productsReducers';

const reducer = combineReducers({
  products: productsReducer,
});

export default reducer;
