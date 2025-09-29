import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { cartAction,clearCart } from './cartAction'
const App=()=>{
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart)
    const laptop={
        name: "Dell",
        price: 4500
    }
    return(
        <div>
            <h2>Product</h2>
            <button onClick ={()=> {dispatch(cartAction(laptop))}}>Add to cart</button>
            <button onClick ={()=> dispatch(clearCart())}>Clear cart</button>
            {cart.map((item,index)=>(
                <div key={index}>
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    </div>
            ))}

        </div>
    )
}
 export default App;