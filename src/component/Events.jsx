import{useState} from "react";
const Events=() => {
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [visible, setVisible]=useState(false);
    const handleBlur=(e)=>{
        console.log("Input field has lost Focus");
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setVisible(!visible)

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={name}
                onChange={e=> setName(e.target.value)}
                onBlur={handleBlur}
                required
                />
                <input
                   placeholder="Email"
                   value={email}
                   onChange={e=>setEmail(e.target.value)}
                   onBlur={handleBlur}
                   required
                   />
                   <button type="submit">Submit</button>
        </form>
        {
            visible &&
            <>
            <h3>Name:{name}</h3>
            <h3>Eamil:{email}</h3>
            </>
        }
        </>
    )
}
export default Events;
