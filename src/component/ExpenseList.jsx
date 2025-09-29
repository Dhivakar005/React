import React,{useContext} from  'react'
import { ExpenseContext } from '../App'
const ExpenseList =() =>
{
    const{ Product, setProduct}=useContext(ExpenseContext);
    return (
        <div>
            <h1>ExpenseList</h1>
            <p>{Product}</p>
        </div>
    )
}
export default ExpenseList;