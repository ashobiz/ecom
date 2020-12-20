import React from 'react';
import {Link} from 'react-router-dom'

export default function Header({cart}){
    return(
        <header>
            <h1>Asho<span>Kart</span></h1>
            <div className="cart">
                <span>Cart <b>({cart} items)</b></span><br />
                <Link to='/checkout'>Checkout</Link>
            </div>
            <div className="clear"></div>
            <br />
            <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}