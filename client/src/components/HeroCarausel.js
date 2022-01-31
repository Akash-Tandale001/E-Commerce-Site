import React from "react"
import b1 from "../banner/1.jpg"
import b2 from "../banner/2.jpg"
import b3 from "../banner/3.jpg"

const HeroCarausel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full h-1/4 ">
            <img
              src="https://images.unsplash.com/photo-1546027658-7aa750153465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="block w-full h-80"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={b1}
              className="block w-full h-80"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={b2}
              className="block w-full h-80"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={b3}
              className="block w-full h-80"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarausel;
