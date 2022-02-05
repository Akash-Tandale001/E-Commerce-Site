import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Mobiles = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const product = await axios.get("https://ecommerceserver-ten.vercel.app/api/mobile");
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
