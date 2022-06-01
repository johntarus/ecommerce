import React from "react";

const History = () => {
  return (
    <div className="bg-[#ECC488] px-36 md:px-4 sm:px-8 mb-4 pb-20">
      <div className=" grid grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-12 pt-20 mb-8 sm:pt-24">
        <div className="font-semibold text-2xl md:text-xl">
          <h1>Explore Our Products to Discover Crazy Deals</h1>
        </div>
        <div className="col-span-2 text-xl text-[#525557]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 place-items-center text-center md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-[#886F6F] w-68 p-8 rounded-md">
          <i
            className="fa fa-compass fa-3x mb-4 product-fa"
            aria-hidden="true"
          ></i>
          <h1 className="font-bold text-3xl pb-4">Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>

        <div className="bg-[#886F6F] w-84 p-8 rounded-md">
          <i className="fa fa-eye fa-3x mb-6 product-fa" aria-hidden="true"></i>
          <h1 className="font-bold text-3xl pb-4">Vission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="bg-[#886F6F] w-84 p-8 rounded-md">
          <i
            className="fa fa-history fa-3x mb-6 product-fa"
            aria-hidden="true"
          ></i>
          <h1 className="font-bold text-3xl pb-4">History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
