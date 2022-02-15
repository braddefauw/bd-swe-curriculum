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
      setMessage('Remove From Cart')
    }
    else{
      cart.splice(cart.indexOf(product), 1);
      product.addedToCart = false;
      setMessage('Add To Cart')
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
