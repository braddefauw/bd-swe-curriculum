import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(){
    const cart = useSelector(state => state.cart) 
    return (
        <header>
            <h1>Plants Direct</h1>
            <nav>
            <Link class="header-link" to="/">Home</Link>
            <Link class="header-link" to="/about">About</Link>
            <Link class="header-link" to="/contact">Contact</Link>
            <section class="cart-length">🛒 ({cart.length})</section>
            </nav>
        </header>
    )
}

export default Nav;