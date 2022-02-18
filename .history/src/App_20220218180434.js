import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {createStore } from 'redux'
import { Provider } from "react-redux";

// reducer function
import reducer from "./reducer";
// Initial State

//store
const store = createStore(reducer);


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
