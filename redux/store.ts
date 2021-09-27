import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import {ProductsType} from './reducers/productsReducers';

// export interface AppState {
//   products: ProductsType;
// }

// middle ware initialization
const bindMiddleware = (middleware: any) => {
  // check if app is in production
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

// root reducer
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return reducers(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
