import { useParams } from 'react-router-dom'
import './App.css';
import { addToCart } from './index'
import { useDispatch } from "react-redux"

function ProductDetails (props) {
     const { productId } = useParams()
     const item = props.data.products[productId-1];

     const product = useSelector(state => state.products.find)
    
    return (
        <div class="product-details">
            <div class="product-details__main">
                <img src={item.images[0].imageSrc} alt={item.images[0].title} />
            </div>
            <aside>
            <h3>{item.name}</h3>
            <p>
                {item.description}
            </p>
            <p>
                ${item.price}
            </p>
            <button onClick={()=> dispatchEvent(addToCart(props.product))}>{item.addedToCart ? 'Remove from' : 'Add to'} cart</button>
            </aside>
      </div>
    )
}

export default ProductDetails