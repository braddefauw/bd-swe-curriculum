import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import data from './products.json'

const initialState = createSlice({
  name: 'plants-direct',
  initialState: {
    cart: [],
    products: data.products
  },
  reducers: {
    addToCart: (state, action) => {
      //add this to our cart if it doesn't exist 
      const currentCart = JSON.parse(JSON.stringify(state.cart))
      const inCart = currentCart.includes(action.payload)
      const idx = state.products.findIndex(p => p.productId === action.payload.productId)

      if(inCart) {
        //if already in cart, no changes to cart only rerender
        state.cart = [...state.cart]
      } else {
        //add to cart
        //update products in state
        state.products[idx].addedToCart = true
        state.cart = [...state.cart, state.products[idx]]
        console.log(state.cart)
      }
    },
    removeFromCart: (state, action) => {
      //convert from json object to js object to be able to filter
      const cartObj = JSON.parse(JSON.stringify(state.cart))

      //need this to update products in state
      const idx = state.products.findIndex(p => p.productId === action.payload.productId)

      //will trigger button to revert back to add to cart
      state.products[idx].addedToCart = false

      //filter items not matching item to be removed
      const removedItemFromCart = cartObj.filter((item) => 
        item.productId !== action.payload.productId
      )

      //update state with cart that has item removed
      state.cart = removedItemFromCart
    }
  }
})

const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const { addToCart, removeFromCart } = initialState.actions
