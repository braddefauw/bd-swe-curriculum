import './App.css'
import { useSelector } from 'react-redux'

function ProductDetails () {
    const cart = useSelector(state => state.cart) 
    for(const item of cart){
        console.log(item.name);
        console.log(item.price)
    }
    
    return (
        <div class="product-details">
            <h1>Checkout</h1>
        </div>
    )
}

export default ProductDetails