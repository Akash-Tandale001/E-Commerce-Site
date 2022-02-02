import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import data from "../data/mobile"

const Mobiles = () => {
    

    // const fetchData =async()=>{
    //   try{const {product} = await axios.get("http://ecommerceserver-ten.vercel.app/api/mobile");
    //   console.log(product.data);}
    //   catch{
    //     console.log("Problem");
    //   }
    //   // const product = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=67331116b79d43e392969b2c6df8b2f6&page=3&pageSize=5')
     
    // }
    // useEffect(() => {
    //  fetchData()
    // }, []);
    
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
