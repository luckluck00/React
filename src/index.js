import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { Provider } from "react-redux";
import {configureStore } from '@reduxjs/toolkit';
import shopSlice from "./store/shopSlice";
const store = configureStore({
  reducer: {
    shop: shopSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Home></Home>
    </Provider>
  </React.StrictMode>,
);
