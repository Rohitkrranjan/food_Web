import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleLoing = async()=>{
        // console.log(email,password)
        let result = await fetch('http://localhost:7000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        if(result)
        {
            localStorage.setItem('curds',JSON.stringify(result))
            navigate('/');  
        }
        else {
            alert("please enter correct details");
          }
    }

    return(
        <div><h1>Login Page</h1>
        
        <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="text" placeholder="Enter Password"onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button onClick={handleLoing}>Login</button>
        
        
        </div>

    )
}

export default Login