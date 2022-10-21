import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../helper/Loader";

const Mobiles = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true)
      const product = await axios.get("https://ecommerceserver-ten.vercel.app/api/data/getProductByKeyword?keyword=mobile");
      setData(product.data.data.data);
      setLoading(false);
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
        Mobiles
      </div>
      <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
        {data.map((value) => (
          <Card value={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
