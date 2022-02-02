import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectitemList } from "../reducer/cartSlice";
import { deleteitem } from "../reducer/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const removeitem = (id) => {
    dispatch(deleteitem(id));
    alert("Item removed to cart succesfully .");
  };
  
  const itemlist = useSelector(selectitemList);
  return (
    <>
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
        {" "}
        Cart Menu{" "}
      </div>
      {itemlist.map((value) => {
        return (
          <>
            <div className="p-4 m-4 items-center h-90% border-8 shadow-md rounded max-w-80% max-h-80%">
              <div className="flex-row justify-center">
                <div className="flex flex-row w-50% justify-between  p-6 rounded-lg shadow-lg bg-white ">
                  <i
                    className="fas fa-trash p-4 cursor-pointer"
                    onClick={() => removeitem(value.id)}
                  ></i>
                  <h5 className="text-gray-900 p-4 text-xl font-medium mb-2">
                    {value.name}
                  </h5>
                  <p className="text-gray-700 text-2xl mb-4">
                    {value.price}
                  </p>               
                  <button
                    type="button"
                    className="  p-4 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* <div>{totalcost}</div> */}
    </>
  );
};

export default Cart;
