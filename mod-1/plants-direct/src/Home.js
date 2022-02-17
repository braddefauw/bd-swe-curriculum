import './App.css';
import { Product } from './Product';

function Home(props){
    return (
        <div className="App">
        {props.data.products.map(product => <Product key={product.productId} product={product} addToCart={props.addToCart}/>)}
        </div>
    );
}

export default Home;