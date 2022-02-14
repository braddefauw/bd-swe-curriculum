export const Img = props => {
    const images = props.images
   
    return (
        <div>
            {images.map(image => (<img src={image.imageSrc} alt={image.title} />))}
        </div>
    )
}