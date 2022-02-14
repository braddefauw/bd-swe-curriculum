export const Product = (props) => {
    const {
        name, description, features, price, images
    } = props.product
    
    return (
        <article className="product">
            <h3>{name}</h3>
            <img src={images[0].imageSrc} />
            <p>{description}</p>
            <ul>
                {features.map(feature =>(<li>{feature}</li>))}
            </ul>
            <p>${price}</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                Full Details
                </a>        
                <button>
                Add to cart
                </button>
            </div>            
        </article>
    )
}