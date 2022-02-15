import {Img} from "./Img"

export const Product = (props) => {
    const {
        name, description, features, price, images, stockLevel
    } = props.product

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
                <a className="button--anchor">
                Full Details
                </a>        
                <button id="mybtn"onClick={()=>props.addToCart(props.product)}>
                {props.message || "Add To Cart"}
                </button>
            </div>            
        </article>
    )
}