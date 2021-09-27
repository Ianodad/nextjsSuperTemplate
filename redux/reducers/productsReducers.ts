export interface ProductsType {
  products: any[];
}

const initialState: ProductsType = {
  products: [],
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {...state, products: action.product};
    default:
      return state;
  }
};
