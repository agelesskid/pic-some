import { shape, string } from "prop-types"
import { useContext } from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

export default function CartItem({item}) {

    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()
    const trashClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

    return (
        <div className="cart-item">
            <i 
                className={`${trashClassName} trash`} 
                ref={ref}
                onClick={()=>{removeFromCart(item.id)}}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: shape({url: string})
}