import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffList from "./staffsList";

const Admin = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductList();
  });

  const getProductList = async () => {
    let result = await fetch("http://localhost:7000/products");
    result = await result.json();
    setProduct(result);
  };
  return (
    <>
      <h1>Admin Side</h1>
      <tr className="header">
        <th>Name</th>
        <th>Price</th>
        <th>Address</th>
        <th>Conatct</th>
        <th>Status</th>
      </tr>
      <tr>
        <div>
          {product.map((item) => {
            return (
              <ul className="food">
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.address}</li>
                <li>{item.conatct}</li>
                <li>on the way</li>
              </ul>
            );
          })}
        </div>
      </tr>
      <tr>
        <td><StaffList/></td>
      </tr>
    </>
  );
};
export default Admin;
