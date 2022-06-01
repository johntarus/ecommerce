import React from "react";

const Newsletter = () => {
  return (
    <div className="px-36 sm:px-6 mt-24 mb-24">
      <h1 className="font-bold text-3xl pb-8 sm:text-l">
        Join our Newsletter And Get 20% OFF
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <p className="pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <div className="ml-16 sm:ml-0">
          <input
            className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 ml-12 sm:ml-0 w-42 sm:w-40 p-3 border border-transparent focus:outline-none focus:border-gray-500 sm:ml-0"
            type="email"
            placeholder="Your Email"
          />
          <button className="w-32 sm:w-26 rounded-l-none py-3 hover:bg-[#c65242] bg-[#ED4833] rounded text-base font-medium leading-none text-white p-2 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

/*
 <input
          className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-1 ml-12 w-1/3 border border-transparent focus:outline-none focus:border-gray-500 sm:ml-0"
          type="email"
          placeholder="Your Email"
        />
        <button className="w-32 rounded-l-none hover:bg-[#c65242] bg-[#ED4833] rounded text-base font-medium leading-none text-white p-2 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 ">
          subscribe
        </button>
*/
