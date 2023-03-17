import { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"


export default function Cart() {

    const ITEM_PRICE = 5.99

    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalPrice = cartItems.length * ITEM_PRICE
    const totalPriceDisplay = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [btnText, setBtnText] = useState('Place Order')

    function placeOrder() {
        setBtnText('Ordering...')
        setTimeout(()=>{
            emptyCart()
            console.log('Order placed!')
            setBtnText('Place Order')
        }, 3000)
        
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">{`Total: ${totalPriceDisplay}`}</p>
            <div className="order-button">
                {cartItems.length > 0 ? <button onClick={placeOrder}>{btnText}</button> : <p>You have no items in your cart.</p>}
            </div>
        </main>
    )
}

