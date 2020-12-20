import React from 'react'
import Items from '../components/Items'

export default function Home() {
    return (
        <section>
            <h2>Welcome to AshoKart</h2>
            <img src="/promo/iphone.jpg" alt="iphone" />
            <br />
            <br />
            <div className="items">
                <h3 className="subhead">Today's Top Sellers</h3>
                <Items />
                <div className="clear"></div>
            </div>
        </section>
    )
}
