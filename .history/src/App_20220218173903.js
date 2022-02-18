import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore } from 'redux'
import { Provider } from "react-redux";

// reducer function
import reducer from "./reducer";
// Initial State
const initialState = {
  cart:cartItems,
  total: 500,
  amount: 42,
}
//store
const store = createStore(reducer, initialState);


// App
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
