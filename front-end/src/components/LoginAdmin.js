import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";

const LoginAdmin = ()=>{

    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleLoing = async()=>{
        // console.log(email,password)
        let result = await fetch('http://localhost:7000/admin-login',{
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
            navigate('/admin');  
        }
        else {
            alert("please enter correct details");
          }

    }

    return(
        <div>
            <h1>This is Admin Login page</h1>
            <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="text" placeholder="Enter Password"onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button onClick={handleLoing}>Login</button>
        </div>
    )
}

export default LoginAdmin;