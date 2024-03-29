import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Cards/Card";
import Loader from "../../helper/Loader";
import { Button, TextField } from "@mui/material";

const Entertainment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchData,SetSearchData]=useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const product = await axios.get(
        "https://ecommerceserver-ten.vercel.app/api/data/getProductByKeyword?keyword=entertainment"
      );
      setData(product.data.data.data);
      setLoading(false);
    } catch {
      console.log("Problem");
    }
  };
  const handleSearch=async()=>{
    try {
      setLoading(true)
      const product = await axios.get(`https://ecommerceserver-ten.vercel.app/api/data/search?keyword=entertainment&value=${searchData}`);
      setData(product.data.data.data);
      SetSearchData("")
    } catch {
      console.log("Problem");
    }
    finally{
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
      {loading ? <Loader /> : null}
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
        Entertainment
      </div>
      <div className="m-auto w-full text-center">
        <TextField id="standard-basic" label="Search Entertainment Product" variant="standard" value={searchData} onChange={handleOnChange} style={{ width: "55em" }} size="medium" onKeyDown={handleKey} />
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

export default Entertainment;
