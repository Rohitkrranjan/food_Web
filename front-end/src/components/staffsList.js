import React, { useEffect, useState } from "react";

const StaffList = () => {
  
    const [product , setProduct] = useState([]);

    useEffect(()=>{
        getStaffsList();

    },[])

    const getStaffsList = async()=>{
        let result = await fetch('http://localhost:7000/list');
        result = await result.json();
        setProduct(result);


    }

    return(
        <div>
               <h1>Staff List</h1>
                <ul className="staffList">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Contact</li>
                    <li>Status</li>
                </ul>
            {
                 
             (product.map((item)=>{
                return(
                    <ul className="food">
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.contact}</li>
                        <li>{item.action}</li>
                    </ul>
                )
            }))}
        </div>
    )

}
export default StaffList