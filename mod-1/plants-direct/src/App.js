import { useState } from 'react'; 
import './App.css';
import data from './products.json';
import { Product } from './Product';

function App() {
  const [cart, setCart] = useState(data.cart);
  const [message, setMessage] = useState('')

  const addToCart = product => {
    if(cart.indexOf(product) == -1){
      setCart([...cart, product])
      product.addedToCart = true;
    }
    else{
      const newCart = cart.filter((oldProduct) => oldProduct !== product);
      product.addedToCart = false;
      setCart(newCart);
    }
  }

  console.log(cart)
  
  return (
    <div className="App">
      {data.products.map(product => <Product key={product.productId} product={product} addToCart={addToCart} message={message}/>)}
      <h4>You have {cart.length} items in your cart.</h4>
    </div>
  );
}

export default App;
