import React from 'react';
import data from './data';
function App() {
  return (
    <div className="maindiv">
      <header className="inlinedis">
        <div>
          <a className="aname" href="/">
            IN BETWEEN THE WHITE LINES
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="inlinedis center">
            {data.products.map((product) => (
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
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">₹{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="inlinedis center">All right reserved</footer>
    </div>
  );
}

export default App;