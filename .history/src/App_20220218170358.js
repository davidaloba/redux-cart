import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore } from 'redux'
import reducer from "./reducer";

// Initial State
const initialState = {
  cart:cartItems,
  total: 0,
  amount: 0,
}
//store
const store = createStore(reducer, initialState);


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
