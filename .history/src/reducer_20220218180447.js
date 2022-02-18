import { DECREASE, INCREASE, CLEAR_CART } from "./actions"
import cartItems from "./cart-items";

const initialState = {
  cart:cartItems,
  total: 500,
  amount: 42,
}

function reducer (state = initialState, action){
  
  switch (action.type) {
    case DECREASE:
      console.log('you decrease amount');
      break

    case INCREASE:
      console.log('you increase amount');
      break

    case CLEAR_CART:
      return {...state, cart:[]}
  
    default:
        return state
  }
      
      //  if(action.type === CLEAR_CART){
      //    return {...state, cart:[]}
      //  }
      //   return state
      
}

export default reducer