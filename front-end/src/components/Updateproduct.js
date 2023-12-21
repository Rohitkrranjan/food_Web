import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState(" ");
  const [price, setPrice] = useState(" ");
  const[address,setAddress] = useState("");
  const[conatct,setContact] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:7000/products/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setAddress(result.address);
    setContact(result.conatct);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:7000/products/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price,address,conatct}),
      headers: {
        "Content-Type": "application/json"
      },
    });

    result = await result.json();
    navigate('/');
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Update Product Here</h1>
      <input type="text" placeholder="Enter product name" className="input-box" onChange={(e) => setName(e.target.value)} value={name}
      /> <br/>
      <input
        type="text"
        placeholder="Enter product price"
        className="input-box"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      /> <br/>
      <input type="text" placeholder="Enter product name"  onChange={(e) => setAddress(e.target.value)} value={address}
      /> <br/>
      <input type="text" placeholder="Enter product name"  onChange={(e) => setContact(e.target.value)} value={conatct}
      /> <br/>
      <button onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
