import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Items from './utils/items-list'
import ItemContext from './utils/states'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'


function App() {

  const [item, setItem] = useState([...Items])
  const [checkout, setCheckout] = useState([])
  const [cart, setCart] = useState(0)

  function updateCart(){
    let tempCart = cart;
    tempCart++;
    setCart(tempCart)
  }

  const providedValues = {item, checkout, setCheckout, updateCart}

  return (
    <div className="app">
      <div className="container">

        <Router>   
          <Header cart={cart}/>
            <ItemContext.Provider value={providedValues}>
              <Route path="/" exact>      
                <Home />
              </Route> 
              <Route path="/about">      
                <About />
              </Route> 
              <Route path="/checkout">      
                <Checkout />
              </Route> 
            </ItemContext.Provider>
          <Footer />
        </Router>

      </div>    

    </div>
  );
}

export default App;
