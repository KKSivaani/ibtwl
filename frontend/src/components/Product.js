import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (

            <div key={product._id} className="items">
                <a href={`/product/${product._id}`}>
                  <img
                    className="imgclass"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="item-info">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <Rating rating={product.rating} nReviews={product.nReviews}></Rating>
                  <div className="price">₹{product.price}</div>
                </div>
              </div>

    )
}

