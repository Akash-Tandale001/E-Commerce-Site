import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const ProductCard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Realme 9 Pro 5G",
      price: "₹21,999",
      imageurl:
        "https://cdn1.smartprix.com/rx-iaT7eU4cX-w103-h125/vivo-v23-5g.webp",
    },
    {
      id: 2,
      name: "Motorola Edge 20 Fusion 5G",
      price: "₹10,849",
      imageurl:
        "https://cdn1.smartprix.com/rx-i7fRbOBuW-w103-h125/samsung-galaxy-m52-5.webp",
    },
    {
      id: 3,
      name: "Realme 9 Pro 5G",
      price: "₹21,999",
      imageurl:
        "https://cdn1.smartprix.com/rx-iaT7eU4cX-w103-h125/vivo-v23-5g.webp",
    },
    {
      id: 4,
      name: "Motorola Edge 20 Fusion 5G",
      price: "₹10,849",
      imageurl:
        "https://cdn1.smartprix.com/rx-i7fRbOBuW-w103-h125/samsung-galaxy-m52-5.webp",
    },
    {
      id: 5,
      name: "Realme 9 Pro 5G",
      price: "₹21,999",
      imageurl:
        "https://cdn1.smartprix.com/rx-iaT7eU4cX-w103-h125/vivo-v23-5g.webp",
    },
    {
      id: 6,
      name: "Motorola Edge 20 Fusion 5G",
      price: "₹10,849",
      imageurl:
        "https://cdn1.smartprix.com/rx-i7fRbOBuW-w103-h125/samsung-galaxy-m52-5.webp",
    },
    {
      id: 7,
      name: "Realme 9 Pro 5G",
      price: "₹21,999",
      imageurl:
        "https://cdn1.smartprix.com/rx-iaT7eU4cX-w103-h125/vivo-v23-5g.webp",
    },
    {
      id: 8,
      name: "Motorola Edge 20 Fusion 5G",
      price: "₹10,849",
      imageurl:
        "https://cdn1.smartprix.com/rx-i7fRbOBuW-w103-h125/samsung-galaxy-m52-5.webp",
    },
  ]);

    // const fetchdata = async () => {
    //   const { product } = await axios.get("http://localhost:5000/api");
    //   setData(product);
    // };
    // console.log(data);

    // useEffect(() => {
    //   fetchdata(); // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
  

  return (
    <div className="flex flex-row overflow-x-auto  ">
      {data.map((value) => (
        <Card value={value}/>
      ))}
    </div>
  );
};

export default ProductCard;
