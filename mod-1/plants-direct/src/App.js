import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { useSelector } from 'react-redux'

function App() {
  const cart = useSelector(state => state.cart) 
  
  return (
    <Router>
      <Nav />
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