import axios from 'axios';
import Cookie from "js-cookie";
import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from '../constants/cartConstants';

export const addToCart = (productId, qty) => ( async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({ type: ADD_TO_CART, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }});

        const { cart: { cartItems }} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
})

export const removeFromCart = (productId) => (  (dispatch, getState) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload:  productId });

        const { cart: { cartItems }} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
})

export const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload:data });
}

export const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload:data });
}

