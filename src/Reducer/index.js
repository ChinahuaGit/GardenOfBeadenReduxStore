const initialState = {
  cart: {},
  error: false
};

export function cartReducer(state = initialState, action) {
  const { type, item } = action;
  console.log(action);

  let updatedCart;
  updatedCart = state.cart;

  switch (action.type) {
    case "ADD_TO_CART_FAILURE":
      return { ...state, error: true };
    //get prior code working
    case "ADD_TO_CART":
      updatedCart[item.id] = item;
      return { cart: updatedCart };
    case "REMOVE_FROM_CART":
      delete updatedCart[item.id];
      return { cart: updatedCart };
    default:
      return state;
  }
}
