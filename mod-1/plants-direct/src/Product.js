import {Img} from "./Img"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { addToCart } from './index'
import { useDispatch } from "react-redux"

export const Product = (props) => {
    const {
        name, description, features, price, images, stockLevel, productId, addedToCart
    } = props.product

    const dispath = useDispatch()

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
                <button id="mybtn" key={productId} onClick={()=> dispatchEvent(addToCart(props.product))}>
                {item.addedToCart ? 'Remove from' : 'Add to'} cart
                </button>
            </div>            
        </article>
    )
}