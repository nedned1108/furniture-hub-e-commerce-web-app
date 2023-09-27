// constants
const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
const UPDATE_CART = "cart/UPDATE_CART";

// action creators
const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

const updateCart = (product) => ({
  type: UPDATE_CART,
  payload: product,
});

// thunks
export const addToCartThunk = (product) => async (dispatch) => {
  dispatch(addToCart(product));
}

export const removeFromCartThunk = (productId) => async (dispatch) => {
  dispatch(removeFromCart(productId));
}

export const updateCartThunk = (product) => async (dispatch) => {
  dispatch(updateCart(product));
}

// reducer
const initialState = { products: [] };

const cartReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      newState = { ...state };
      newState.products.push(action.payload);
      return newState;
    case REMOVE_FROM_CART:
      newState = { ...state };
      newState.products = newState.products.filter(product => product.id !== action.payload);
      return newState;
    case UPDATE_CART:
      newState = { ...state };
      newState.products = newState.products.map(product => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
      return newState;
    default:
      return state;
  }
}

export default cartReducer;
