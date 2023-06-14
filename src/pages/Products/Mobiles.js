import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Loader from "../../helper/Loader";
import { Button, TextField } from "@mui/material";

const Mobiles = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [searchData,SetSearchData]=useState("");
  const fetchData = async () => {
    try {
      setLoading(true)
      const product = await axios.get("https://ecommerceserver-ten.vercel.app/api/data/getProductByKeyword?keyword=mobile");
      setData(product.data.data.data);
    } catch {
      console.log("Problem");
    }finally{
      setLoading(false)
    }
  };
  const handleSearch=async()=>{
    try {
      setLoading(true)
      const product = await axios.get(`https://ecommerceserver-ten.vercel.app/api/data/search?keyword=mobile&value=${searchData}`);
      setData(product.data.data.data);
      SetSearchData("")
    } catch {
      console.log("Problem");
    }finally{
      setLoading(false)
    }
  }
  const handleOnChange=(e)=>{
    const value = e.target.value;
    SetSearchData(value)
    console.log(value)
  }
  const handleKey=(e)=>{
    if(e.key==="Enter"){
      handleSearch();
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <Loader/> : null}
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
        Mobiles
      </div>
      <div className="m-auto w-full text-center">
        <TextField id="standard-basic" label="Search Mobiles Product" variant="standard" value={searchData} onChange={handleOnChange} style={{ width: "55em" }} size="medium" onKeyDown={handleKey}  />
        <Button style={{marginTop:"1em",marginLeft:"1em"}} variant="contained" onClick={handleSearch}>Search</Button>
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
