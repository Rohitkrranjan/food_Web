import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  
    const [product , setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getProductList();

    })

    const getProductList = async()=>{
        let result = await fetch('http://localhost:7000/products');
        result = await result.json();
        setProduct(result);


    }

    return(
        <div>
            {
             (product.map((item)=>{
                return(
                    <ul className="food">
                        <li>{item.name}</li>
                        <li>{item.address}</li>
                        <li>{item.conatct}</li>
                        <li>Undelivered</li>
                    </ul>
                )
            }))
        }
        </div>
    )

}

export default ProductList