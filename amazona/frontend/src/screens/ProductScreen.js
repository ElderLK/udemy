import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

const ProductScreen = (props) => {

const { match: { params: { id }}} = props;
const [ qty, setQty ] = useState(0);
const productDetails = useSelector(state => state.productDetails);
const { product, loading, error } = productDetails;
const dispatch = useDispatch();

useEffect(() => {
    dispatch(detailsProduct(id))
}, [])
// const product = data.products.find(p => String(p._id) === String(id));

const handleAddToCart = () => {
    props.history.push(`/cart/${id}?qty=${qty}`)
}
    
return (
    loading ? <div>Loading...</div> :
    error ? <div>Error: { error }</div> :
    <div>
       <div className="back-to-result">
           <Link to="/">Back to result</Link>
       </div>
       <div className="details">
            <div className="details-image">
                <img src={!!product.image ? require(`../images/${product.image}`) : ''} alt="product"/>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4> { product.name } </h4>
                    </li>
                    <li>
                        {product.rating} Starts({product.numReviews} Reviwers)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: { product.price }
                    </li>
                    <li>
                        Status: { product.countInStock > 0 ? 'In Stock' : 'Out of stock' }
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {
                                [...Array(product.countInStock).keys()].map((_, idx) => <option key={idx + 1} value={idx + 1}>{ idx + 1 }</option>)
                            }
                        </select>
                    </li>
                    <li>
                    { product.countInStock > 0 &&
                        <button className="button primary" onClick={handleAddToCart}>Add To Cart</button>
                    }
                    </li>
                </ul>
            </div>
       </div>
    </div>
)}

export default ProductScreen;