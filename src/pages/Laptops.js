import React, { useState ,useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import Loader from "../helper/Loader";

const Laptops = () => {
 
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true)
      const product = await axios.get("https://ecommerceserver-ten.vercel.app/api/data/getProductByKeyword?keyword=laptop");
      setData(product.data.data.data);
      setLoading(false)
    } catch {
      console.log("Problem");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
        {loading ? <Loader/> : null}
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

export default Laptops;
