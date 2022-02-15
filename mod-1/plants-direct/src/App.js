import { useState } from 'react'; 
import './App.css';
import data from './products.json';
import { Product } from './Product';

function App() {
  const [cart, setCart] = useState(data.cart);

  const addToCart = product => {
    if(cart.indexOf(product) == -1){
      setCart([...cart, product])
    }
    product.addedToCart = true;
    const btn = document.getElementById("mybtn");
    btn.innerText = "Remove From Cart";
    console.log(btn);
  }

  console.log(cart)
  
  return (
    <div className="App">
      {data.products.map(product => <Product key={product.productId} product={product} addToCart={addToCart}/>)}
      <h4>You have {cart.length} items in your cart.</h4>
    </div>
  );
}

export default App;
