import React,{useContext} from  'react'
import { ExpenseContext } from '../App'
const ExpenseTracker =() =>
{
    const{ Product, setProduct}=useContext(ExpenseContext);
    return (
        <div>
            <h1>ExpenseTracker</h1>
            <p>{Product}</p>
        </div>
    )
}
export default ExpenseTracker;