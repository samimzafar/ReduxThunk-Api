import { ActionTypes } from "./ActionTypes";

const { ADD_TO_CART, SET_SELECT_BREED, DEL_FROM_CART } = ActionTypes;

// ////////// DOCTOR ACTIONS ///////////////

export const selectedDogBreed = (dogBreed) => ({
  type: SET_SELECT_BREED,
  payload: dogBreed,
});
export const addToCart = (cart) => ({
  type: ADD_TO_CART,
  payload: cart,
});
export const deletefromCart = (cart) => ({
  type: DEL_FROM_CART,
  payload: cart,
});

export const dogAction = { selectedDogBreed, addToCart, deletefromCart };

// ////////// DOCTOR REDUCER ///////////////
const INITIAL_STATE = {
  cartUser: [],
  SelectedBreed: "",
};

export default (state, action) => {
  if (!state) state = INITIAL_STATE;
  switch (action.type) {
    case SET_SELECT_BREED: {
      return {
        ...state,
        SelectedBreed: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartUser: action.payload,
      };
    }
    case DEL_FROM_CART: {
      const newItem = state.cartUser.filter((val) => val !== action.payload);
      return {
        ...state,
        cartUser: newItem,
      };
    }
    default:
      return state;
  }
};
