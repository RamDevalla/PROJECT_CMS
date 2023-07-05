/*  Provider && Consumer */
import React, { useState } from 'react'


const CartContext = React.createContext()

const CartProvider = (props) =>{
    const [cartdata, setCartdata ] = useState([]);
    const addCartData = (data) =>{
            setCartdata([...cartdata, data]);
    }
    // const removeCartData = () =>{

    // }

    return(
        <CartContext.Provider value={{cartdata, addCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};