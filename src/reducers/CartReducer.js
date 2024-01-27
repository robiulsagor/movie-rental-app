export const initialState = {
  cartItems: [],
};

export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case TYPES.DELETE_FROM_CART: {
      const newItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload.cartId
      );
      return {
        ...state,
        cartItems: newItems,
      };
    }
  }
};
