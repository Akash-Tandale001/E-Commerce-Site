import React from "react";
import Card from "./Card";
import data from "../data/topProduct"

const ProductCard = () => {

  return (
    <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
      {data.map((value) => (
        <Card value={value} key={value.id}/>
      ))}
    </div>
  );
};

export default ProductCard;
