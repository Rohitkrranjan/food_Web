import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState("");
  const [conatct, setContact] = useState("");
  const navigate = useNavigate();

  const addProduct = async () => {
    let result = await fetch("http://localhost:7000/addproduct", {
      method: "post",
      body: JSON.stringify({ name, address, conatct }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    navigate("/");
  };

  return (
    <div>
     <h1>Order Now</h1>
     <input type="text" placeholder="Food Name" onChange={(e)=>setName(e.target.value)}/> <br/>
     <input type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/> <br/>
     <input type="text" placeholder="Enter Conatct" onChange={(e)=>setContact(e.target.value)}/> <br/>
     <button onClick={addProduct}>order</button>
    </div>
  );
};

export default Menu;
