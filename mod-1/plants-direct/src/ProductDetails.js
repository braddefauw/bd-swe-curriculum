import { useParams } from 'react-router-dom'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './index'

function ProductDetails () {
    const { productId } = useParams()
    const product = useSelector(state => {
        return state.products.find(p => String(p.productId) === productId)
    })
    const dispatch = useDispatch()

    const {
        name,
        description,
        images: [
            {
                title,
                imageSrc
            }
        ],
        price,
        addedToCart
    } = product
    
    return (
        <div class="product-details">
            <div class="product-details__main">
                <img src={imageSrc} alt={title} />
            </div>
            <aside>
            <h3>{name}</h3>
            <p>
                {description}
            </p>
            <p>
                ${price}
            </p>
            <button onClick={() => dispatch(addToCart(product))}>{addedToCart ? 'Remove from' : 'Add to'} cart</button>
            </aside>
      </div>
    )
}

export default ProductDetails