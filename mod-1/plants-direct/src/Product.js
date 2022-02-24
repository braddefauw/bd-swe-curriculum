import {Img} from "./Img"
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from './index'

export const Product = (props) => {
    const {
        name, description, features, price, images, stockLevel, productId
    } = props.product

    const dispatch = useDispatch()

    return (
        <article className="product">
            <h3>{name}</h3>
            <Img image={images[0]} stockLevel={stockLevel}/>
            <p>{description}</p>
            <ul>
            {features.map((feature, id) =>(<li key={id}>{feature}</li>))}
            </ul>
            <p>${price}</p>
            <div className="promo-blocks__actions">
                <Link to={`/products/${productId}`}>Full Details</Link>       
                {(!props.product.addedToCart) ? 
                <button id="mybtn" key={productId} onClick={() =>{                  
                        dispatch(addToCart(props.product))}                      
                }>
                    Add to Cart
                </button> :
                <button id="mybtn" key={productId} onClick={() =>{                  
                    dispatch(removeFromCart(props.product))}                      
                }>
                    Remove From Cart
                </button> } 
            </div>            
        </article>
    )
}