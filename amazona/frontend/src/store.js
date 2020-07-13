import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from "js-cookie";

import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducer';
import { userSignInReducer, userRegisterReducer } from './reducer/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems, shipping:{}, payment:{} }, userSignin: { userInfo } };
const reducer = combineReducers({
   productList: productListReducer, 
   productSave: productSaveReducer, 
   productDelete: productDeleteReducer, 
   productDetails: productDetailsReducer,
   cart: cartReducer,
   userSignin: userSignInReducer,
   userRegister: userRegisterReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
