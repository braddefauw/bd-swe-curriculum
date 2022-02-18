import {Img} from "./Img"
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const Product = (props) => {
    const {
        name, description, features, price, images, stockLevel, productId, addedToCart
    } = props.product

    let message = '';

    if(addedToCart){
        message = "Remove From Cart"
    }else{
        message = "Add To Cart"
    }

    return (
        <article className="product">
            <h3>{name}</h3>
            <Img image={images[0]} stockLevel={stockLevel}/>
            <p>{description}</p>
            <ul>
                {features.map(feature =>(<li>{feature}</li>))}
            </ul>
            <p>${price}</p>
            <div className="promo-blocks__actions">
                <Link to={`/products/${productId}`}>Full Details</Link>       
                <button id="mybtn" key={productId} onClick={()=>props.addToCart(props.product)}>
                {message}
                </button>
            </div>            
        </article>
    )
}