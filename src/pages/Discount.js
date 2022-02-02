import React, { useState } from "react";
import Card from "../components/Card";
import data from "../data/laptop";

const Discount = () => {
 
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
