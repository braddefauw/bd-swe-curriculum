import { useState } from 'react'; 
import './App.css';
import data from './products.json';
import { Product } from './Product';

function Home(){
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

    console.log(cart)
    
    return (
        <div className="App">
            <h1>This is the about page!</h1>
        </div>
    );
}

export default Home;