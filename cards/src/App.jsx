import React from 'react'
import { useCart } from './CartContext';

const App = () => {

  const  {cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    const existCartItem = cartState.cartItems.find((cartItem) => cartItem.id === item.id);

    if(existCartItem) {
      cartDispatch({type: "UPDATE_QUANTITY", payload: {id:item.id, quantity: existCartItem.quantity + 1}})
    } else {
      cartDispatch({type: "ADD_TO_CART", payload:{...item, quantity:1}});
    } 
  };

  // update add to cart
  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY", payload: {id: itemId, quantity}
      })
    }
  };

  // remove
  const remove = (itemId) => {
    cartDispatch({ type: "REMOVE", payload: itemId})
  };


  const products = [
    {id:1, name: "mobile"},
    {id:2, name: "laptop"},
    {id:3, name: "camera"},
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>{
        products.map((e) => (
          <div>
            <li key={e.id}>{e.name}</li>
            <button onClick={() => addToCart(e)}>Add to Cart</button>
          </div>     
        ))
        }</ul>

        <hr />

        <ul> {
          cartState.cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} 
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => remove(item.id)}>Remove</button>
            </li>
          ))
        }</ul>
    </div>
  )
}

export default App