import React,{useContext} from  'react'
import { ExpenseContext } from '../App'
const ExpenseForm =() =>
{
    const{ Product, setProduct}=useContext(ExpenseContext);
    return (
        <div>
            <h1>ExpenseForm</h1>
            <p>{Product}</p>
        </div>
    )
}
export default ExpenseForm;