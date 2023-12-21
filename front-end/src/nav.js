import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Nav =()=>{
    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.clear();
        navigate('/');
    }
  return(
    <div className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link onClick={logout} to='/signup'>Logout</Link></li>
        <li><Link to='/signup'>Signup(admin)</Link></li>
        <li><Link to='/login-admin'>Login(admin)</Link></li>

        
    </div>
  )
}

export default Nav;