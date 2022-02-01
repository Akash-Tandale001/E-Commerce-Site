import React from 'react';
import { useDispatch } from "react-redux";
import {saveitem} from "../reducer/cartSlice"
import {savefav} from "../reducer/favSlice"

const Card = ({value}) => {



    const dispatch = useDispatch();

    const addcart=()=>{
        console.log("add cart button clicked on "+value.name);
        dispatch(
            saveitem({
                id:value.id,
                name : value.name,
                imageurl :value.imageurl,
                price :value.price
            })
          );
          alert("Your "+value.name+" is added to cart succesfully .");

    }
    const addfav=()=>{
        console.log("add fav button clicked on "+value.name);
        dispatch(
            savefav({
                id:value.id,
                name : value.name,
                imageurl :value.imageurl,
                price :value.price
            })
          );
          alert("Your "+value.name+" is added to Favourite section succesfully .");

    }
    
    // justify-between
  return (
  <div>
      <div className="flex justify-center m-4 hover:shadow-xl max-w-sm max-h-md">
          <div className="flex flex-row   rounded-lg bg-white shadow-lg border-4">          
            <img src={value.imageurl} className='w-sm h-sm' key={value.id} alt="..." />
            <div className="p-6 flex flex-col justify-center    ">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {value.name}
              </h5>
              <div>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i></div>
              <div className="flex flex-col justify-between  item-center">
              
                <h1 className="text-lg font-bold text-gray-700  md:text-xl">
                  {value.price}
                </h1>
                <button className="px-2 py-1 mb-2 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 " onClick={()=>addfav()}>
                <i class="far fa-heart"></i> Add to Favourite
                </button>
                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 " onClick={()=>addcart()}>
                <i class="fal fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
  </div>
  );
};

export default Card;
