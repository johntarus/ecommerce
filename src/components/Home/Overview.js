import React from "react";

const Overview = () => {
  return (
    <div className="bg-[#EDE6DB] px-12 rounded-lg sm:px-8 mb-12 pb-20">
      <h1 className="text-center font-bold text-4xl pt-36 mb-8 sm:pt-24">
        Fashop Overview
      </h1>
      <p className="text-xl text-center text-[#525557] pb-12">
        Fashop Boutique Shop is a uniquely different shopping experience. Fashop
        was founded in 2011, OH. Fashop saw a need for a small business in her
        local community and decided to open a boutique. We now have grown to 10
        Brick & Mortar locations throughout Nairobi, which includes 3 franchise
        locations. We currently ship thousands of packages a week all across
        Kenya.
      </p>
      <div class="flex flex-col justify-center items-center">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View More
        </button>
      </div>
    </div>
  );
};

export default Overview;
