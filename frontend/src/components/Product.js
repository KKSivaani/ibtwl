import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (

            <div key={product._id} className="items">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="imgclass"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="item-info">
                  <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </Link>
                  <Rating rating={product.rating} nReviews={product.nReviews}></Rating>
                  <div className="price">₹{product.price}</div>
                </div>
              </div>

    )
}

