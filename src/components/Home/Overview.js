import React from "react";

const Overview = () => {
  return (
    <div className="bg-[#EDE6DB] px-20 md:px-4 rounded-lg sm:px-8 mb-12 pb-20">
      <h1 className="text-center font-bold text-4xl pt-36 md:pt-24 mb-8 sm:pt-24">
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
      <div className="flex flex-col justify-center items-center">
        <button className="bg-purple-400 hover:bg-[#ECC488] text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent sm:w-36 sm:h-12 rounded">
          View More
        </button>
      </div>
    </div>
  );
};

export default Overview;
