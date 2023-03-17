import { useContext } from "react"
import { Context } from "../Context"
import { bool, number, oneOfType, shape, string } from 'prop-types'
import useHover from "../hooks/useHover"

export default function Image({className, img}) {

    const [hovered, ref] = useHover()

    const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)

    const isInCart = cartItems.some(item=>item.id === img.id)

    const favIcon = img.isFavorite 
        ? <i className="ri-heart-fill favorite" onClick={()=>{toggleFavorite(img.id)}}></i> 
        : hovered && <i className="ri-heart-line favorite" onClick={()=>{toggleFavorite(img.id)}}></i>

    const cartIcon = isInCart
        ? <i className="ri-shopping-cart-fill cart" onClick={()=>{removeFromCart(img.id)}}></i>
        : hovered && <i className="ri-add-circle-line cart" onClick={()=>{addToCart(img)}}></i>

    return (
        <div
            className={`${className} image-container`} 
            ref={ref}
        >
            {favIcon}
            {cartIcon}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
    className: string,
    img: shape({
        id: oneOfType([string, number]).isRequired,
        url: string.isRequired,
        isFavorite: bool,
    })
}