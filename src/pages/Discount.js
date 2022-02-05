import React, { useState ,useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Discount = () => {
 
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const product = await axios.get("https://ecommerceserver-ten.vercel.app/api/laptops");
      console.log(product.data);
      setData(product.data);
    } catch {
      console.log("Problem");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">        
        Laptops
      </div>
      <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
        {data.map((value) => (
          <Card value={value} />
        ))}
      </div>
    </div>
  );
};

export default Discount;
