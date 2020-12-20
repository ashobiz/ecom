import React, {useContext, } from 'react'
import ItemContext from '../utils/states'

export default function Items() {
    const {item, checkout, setCheckout, updateCart} = useContext(ItemContext)
    

    function handleAdd(e,i){
        e.preventDefault();
        setCheckout([...checkout, item[i].id])
        updateCart();
    }

    return (
        <div>
            {item.map((item, i) => {
                return (
                    <div className="item" key={item.id}>            
                        <img src={item.imgUrl} alt={item.name} />
                        <h3>{item.name}</h3>
                        <h4>${item.price}</h4>
                        {(checkout.includes(item.id)) ? 
                        <input 
                            type="button" 
                            className="addToCart" 
                            value="Added" 
                            disabled
                        /> 
                        :
                        <input 
                            type="button" 
                            className="addToCart" 
                            onClick={(e)=>handleAdd(e,i)} 
                            value="Add to Cart" 
                        />
                        }
                    </div>
                )
            })}
        </div>
    )
}
