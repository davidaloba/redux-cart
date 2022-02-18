import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore } from 'redux'


// Initial Store
const initialStore = {
  count:78
}
// reducer function
function reducer (state, action){
  console.log({state, action});
  if(action.type === 'DECREASE'){
    console.log('hey it works');
    return {count:state.count -1};
  }
  return state   
}
//store
const store = createStore(reducer, initialStore);
//action
store.dispatch({type:'DECREASE'})
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
