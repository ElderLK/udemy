import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

const HomeScreen = (props) => {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //     const { data } = await axios.get('/api/products');
        //     setProducts(data);
        // }
        // fetchData();
        dispatch(listProducts());
    }, []);

return (
    loading ? <div>Loading...</div> :
    error ? <div>{ error }</div> :
    <ul className="products">
        {  products.map( product => 
        <li key={product._id}>
            <div className="product">
                <Link to={`/product/${product._id}`}>
                    <img className="product-image" src={require(`../images/${product.image}`)} alt="product" />
                </Link>
                <div className="product-name">
                   <Link to={`/product/${product._id}`}>{product.name}</Link>
                </div>
                <div className="product-brand">
                    {product.brand}
                </div>
                <div className="product-price">
                    {product.price}
                </div>
                <div className="product-rating">
                    {product.rating} Starts({product.numReviews} Reviwers)
                </div>
            </div>
        </li>
        )}
    </ul>
)}

export default HomeScreen;