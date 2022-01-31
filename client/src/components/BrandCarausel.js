import React from 'react';
import apple from "../logos/apple.png"
import blackberry from "../logos/blackberry.png"
import htc from "../logos/htc.png"
import nokia from "../logos/nokia-1.png"
import samsung from "../logos/samsung.png"
import virgin from "../logos/virgin.png"
import sony from "../logos/sony.png"
import toshiba from "../logos/toshiba.png"

const BrandCarausel = () => {
  return (
  <div className='flex p-4 justify-between overflow-hidden shadow-md'>
      <div className="flex-col relative float-center  w-full" >
      <img
        src={apple}
        className="block w-40 h-40"
        alt="Wild Landscape"
      />
    </div>
    <div className=" relative float-center w-full">
      <img
        src={blackberry}
        className="block w-40 h-40"
        alt="Camera"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={samsung}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={nokia}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={virgin}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={htc}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={sony}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>
    <div className="relative float-center w-full">
      <img
        src={toshiba}
        className="block w-40 h-40"
        alt="Exotic Fruits"
      />
    </div>

</div>
  
  );
};

export default BrandCarausel;