import Home from './Home'
import Contact from './Contact'
import About from './About'
import { useState } from 'react'; 
import data from './products.json';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState(data.cart);

  const addToCart = product => {
      if(cart.indexOf(product) === -1){
      setCart([...cart, product])
      product.addedToCart = true;
      }else{
      const newCart = cart.filter((oldProduct) => oldProduct !== product);
      product.addedToCart = false;
      setCart(newCart);
      }
  }
  
  return (
    <Router>
      <header>
        <h1>Plants Direct</h1>
        <nav>
          <Link class="header-link" to="/">Home</Link>
          <Link class="header-link" to="/about">About</Link>
          <Link class="header-link" to="/contact">Contact</Link>
          <section class="cart-length">🛒 ({cart.length})</section>
        </nav>
      </header>
      <Routes>
        <Route path="/" element = {<Home addToCart={addToCart} data={data}/>} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;