import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore } from 'redux'


// Initial State
const initialState = {
  count:0,
  name: 'john'
}

export const DECREASE = 'DECREASE'

// reducer function
function reducer (state, action){
  console.log({state, action});
  if(action.type === DECREASE){
    return {...state, count:state.count - 1};
  }
  if(action.type === 'INCREASE'){
    return {...state, count:state.count + 1};
  }
  if(action.type === 'RESET'){
    return {...state, count: 0};
  }
  if(action.type === 'CHANGE_NAME'){
    return {...state, name: 'Bob'};
  }
  return state
}
//store
const store = createStore(reducer, initialState);
//action
store.dispatch({type:'DECREASE'})
store.dispatch({type:'INCREASE'})
store.dispatch({type:'CHANGE_NAME'})
store.dispatch({type:'INCREASE'})
store.dispatch({type:'RESET'})

console.log(store.getState());

// App
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
