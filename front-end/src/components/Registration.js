import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Registration = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("")
    const navigate = useNavigate()


   const dataHandle =async()=>{
    let result = await fetch('http://localhost:7000/register',{
        method:"post",
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
   }})
   result = await result.json();
   console.log(result)
   navigate('/')

   }

    return(
        <div>
            <h1>Registration Page</h1>
            Name <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
            Email <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            Password <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button onClick={dataHandle}>Submit</button>
        </div>
    )
}

export default Registration;