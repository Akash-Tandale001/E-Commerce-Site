import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const ProductCard = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Samsung Galaxy A72 (8 GB RAM, 128 GB Storage, Awesome Violet)",
      price: "₹ 30,990",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/9b5ca29e-8a44-4054-89fd-ce56dc3fee1d_182x182.jpg"
    },
    {
      id: "2",
      name: "Samsung Galaxy A72 (8 GB RAM, 128 GB Storage, Awesome Blue)",
      price: "₹ 30,990",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/78b6ebcf-64f5-4636-b08f-9fc77fde1071_182x182.jpg"
    },
    {
      id: "3",
      name: "Samsung Galaxy A72 (8 GB RAM, 128 GB Storage, Awesome Black)",
      price: "₹ 30,990",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/de65f78b-04bf-491f-9b0c-2ff5dcc5a4a0_182x182.jpg"
    },
    {
      id: "4",
      name: "Apple iPhone 11 (64 GB, White)",
      price: "₹ 49,900",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/f94bc463-12d4-4489-aef4-a345105f87dd_182x182.jpg"
    },
    {
      id: "5",
      name: "Vivo V21 5G (8 GB RAM, 128 GB Storage, Sunset Dazzle)",
      price: "₹ 29,990",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/4b3371ff-b7e5-486b-836d-97b87b5aa29a_182x182.jpg"
    },
    {
      id: "6",
      name: "Vivo V21E 5G Mobile (8 GB ,128 GB, Dark Pearl)",
      price: "₹ 24,990",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/cbadcc76-6c9f-4806-a47c-f7a0f64ee2c4_182x182.jpg"
    },
    {
      id: "7",
      name: "Samsung A22 (6 GB, 128 GB, Black)",
      price: "₹ 18,499",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/32f472b9-ee5e-4e71-9239-658e78cb631b_182x182.jpg"
    },
    {
      id: "8",
      name: "Samsung A22 5G (6 GB RAM, 128 GB ROM, Gray)",
      price: "₹ 19,999",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/874160e7-d432-459f-a443-404901a1eda1_182x182.png"
    },
    {
      id: "9",
      name: "Samsung A22 5G (8 GB RAM, 128 GB ROM, Gray)",
      price: "₹ 21,999",
      imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/65013798-5c87-4029-8fd9-1572599896b0_182x182.jpg"
    }
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
    <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
      {data.map((value) => (
        <Card value={value} key={value.id}/>
      ))}
    </div>
  );
};

export default ProductCard;
