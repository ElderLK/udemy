import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart  } from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0
});

const CartProvider = ({ children }) => {
    const [ hidden, setHidden ] = useState(true);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartItemsCount, setCartItemsCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const totalValue = cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
          )
        const totalItems = cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
        )
        setCartItemsCount(totalItems);
        setCartTotal(totalValue);
    }, [cartItems])

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(cartItems.filter(
        cartItem => cartItem.id !== item.id
    ));

    const toggleHidden = () => setHidden(!hidden);


    return <CartContext.Provider
        value= {{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart,
            cartTotal
        }}>
        { children }
    </CartContext.Provider>
}

export default CartProvider;