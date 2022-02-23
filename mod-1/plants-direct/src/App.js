import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/products/:productId" element = {<ProductDetails />} />
        <Route path="/checkout" element = {<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;