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
  count:0
}
// reducer function
function reducer (state, action){
  console.log({state, action});
  return state   
}
//store
const store = createStore(reducer, initialStore);
console.log(store.getState());

// App
function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
