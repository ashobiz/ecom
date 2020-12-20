import React, {useContext, useEffect, useState} from 'react';
import ItemContext from '../utils/states'

export default function Checkout() {
    const {item, checkout, setCheckout} = useContext(ItemContext)
    const [checkoutItems, setCheckoutItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let ctItems = item.filter((item, i) => {
            if(checkout.includes(item.id)){
                return (<div className="item" key={item.id}>            
                    <img src={item.imgUrl} alt={item.name} />
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                </div>)
            }
        })
        setCheckoutItems([...checkoutItems, ...ctItems])
    },[checkout])

    useEffect(()=>{
        let sum = 0;
        sum = checkoutItems.reduce((tot,item) => {
            return tot + item.price
        },0)
        setTotal(sum) 
    },[checkoutItems])


    return (
        <section>
            <h2>Checkout</h2>
            <hr />
            <div className="checkout">      
                {checkoutItems.length>0 ? 
                    checkoutItems.map((item, i)=>{
                        return (
                        <div className="item" key={i}>            
                            <img src={item.imgUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                            <h4>${item.price}</h4>
                            <div className="clear"></div>
                        </div>)
                    })
                    : (<div className="no-items">No  items here... Please add items to the cart....</div>)
                }     
                
                {
                    checkoutItems.length>0 ?
                    (
                        <div className="check-foot">
                            <div className="total">Total - ${total}</div> 
                            <a href="#" className="checkoutBtn" onClick={(e) => e.preventDefault()}>Checkout</a>
                        </div>
                    ) : ('')
                }
                
            </div>
        </section>
    )
}
