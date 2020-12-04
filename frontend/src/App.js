import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' ;
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="inlinedis center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;