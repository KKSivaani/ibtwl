import React from 'react'
import { Link } from 'react-router-dom';
import Product from '../components/Product'
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
    const product= data.products.find(x => x._id === props.match.params.id);
    if (!product){
        return <div>PRODUCT NOT AVAILABLE</div>;
    }
    return (<div>
            <Link to="/">Back to HomeScreen</Link>
            <div className="inlinedis top">
            <div className="col02">
                <img className= "huge" src={product.image} alt={product.name}></img>

            </div>
            <div className="col01">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} nReviews={product.nReviews}></Rating>
                    </li>
                    <li>
                        Price: ₹{product.price}
                    </li>
                    <li>
                        <p>{'Description: '+ product.description}</p>
                    </li>
                </ul>

            </div>
            <div className="col01">
                <div className="items item-info">
                    <ul>
                        <li>
                            <div className="inlinedis">
                                <div>Price</div>
                                <div className="price">₹{product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="inlinedis">
                                <div>Status</div>
                                <div >
                                    {product.InStockcount>0? 
                                    (<span className="avl">Available In Stock</span>):
                                    (<span className="error">Unavailable</span>)
                                    }
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to cart</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>);
    
}
