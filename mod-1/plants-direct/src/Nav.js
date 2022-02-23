import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav(){
    const cart = useSelector(state => state.cart) 
    console.log(new Date(), cart.length)
    return (
        <header>
            <h1>Plants Direct</h1>
            <nav>
            <Link class="header-link" to="/">Home</Link>
            <Link class="header-link" to="/about">About</Link>
            <Link class="header-link" to="/contact">Contact</Link>
            <Link class="cart-length" to="/checkout"><section>🛒 ({cart.length})</section></Link>
            </nav>
        </header>
    )
}

export default Nav;