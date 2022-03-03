import { DECREASE, INCREASE, CLEAR_CART } from "./actions"

function reducer (state, action){
  
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