import { createContext, useEffect, useState } from "react"
const Context = createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res=>res.json())
            .then(data=>setPhotos(data))
    }, [])

    function toggleFavorite(id){ 
        const newArr = photos.map(item=>{
            if(item.id === id){
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                }
            } 
            return item
        })

        setPhotos(newArr)
    }
        
    function addToCart(img){
        setCartItems(prevCartItems=>[...prevCartItems, img])
    }

    function removeFromCart(id){
        setCartItems(prevCartItems=>prevCartItems.filter(item=>item.id!==id))
    }

    function emptyCart(){
        setCartItems([])
    }

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, emptyCart, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }