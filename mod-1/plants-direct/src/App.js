import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { useSelector } from 'react-redux'

function App() {
  const cart = useSelector(state => state.cart) 
  
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
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/products/:productId" element = {<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;