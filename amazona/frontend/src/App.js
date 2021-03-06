import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import './App.css';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

  const userSignIn = useSelector(state => state.userSignin);  
  const { userInfo } = userSignIn;

  function openMenu() {
    document.querySelector(".sidebar").classList.add("open")
  }
  function closeMenu() {
      document.querySelector(".sidebar").classList.remove("open")
  }


  return (
    <BrowserRouter>
      <div className="grid-container ">
        <header className="header">
            <div className="brands">
                <button onClick={ openMenu }>
                    &#9776;
                </button>
                <Link to="/">
                  amazona
                </Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ? <Link tp="/profile">{userInfo.name}</Link> :
                    <Link to="/signin">
                        Signin
                    </Link>
                }
                {/* <a href="signin.html">Signin</a> */}
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={ closeMenu }>x</button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <Route path="/products" component={ProductsScreen} />
                <Route path="/payment" component={PaymentScreen} />
                <Route path="/placeorder" component={PlaceOrderScreen} />
                <Route path="/shipping" component={ShippingScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/signin" component={SignInScreen} />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/" exact component={HomeScreen}/>
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
