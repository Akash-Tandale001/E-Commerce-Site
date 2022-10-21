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
 const list = useSelector(selectitemList);

  // const itemlist = list.length !== 0 ?  list : JSON.parse(sessionStorage.getItem("cartList"))||[];
  return (
    <>
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
         Cart Menu
      </div>
      {list.map((value) => {
        // setTotalCost((price)=>price+value.price);
        return (
          <>
            <div className="p-4 m-4 items-center h-90% border-8 shadow-md rounded max-w-80% max-h-80%" key={value.id}>
      
              <div className="flex flex-col md:flex-row w-50% justify-between  p-6 rounded-lg shadow-lg bg-white ">
                <i
                  className="fas fa-trash p-2 cursor-pointer"
                  onClick={() => removeitem(value.id)}
                ></i>
                <img
                  src={value.imageurl}
                  className="m-auto md:m-2"
                  style={{ height: "5rem", width: "5rem" }}
                  alt="..."
                />
                <h5 className="text-gray-900 p-2 text-xl font-medium mb-2">
                  {value.name}
                </h5>
                <p className="text-gray-700 text-2xl mb-4">{value.price}</p>
                <button
                  type="button"
                  className="  p-4 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Buy Now
                </button>
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
