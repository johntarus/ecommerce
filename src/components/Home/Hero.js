import React from "react";
import banner from "../../assets/images/banner.png";

function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2 divide-x justify-items-center sm:grid-cols-1 md:grid-cols-1">
        <div className="mt-16 px-12">
          <h2 className=" font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-[#ed4833] sm:text-2xl md:text-2xl lg:text-3xl">
            FASHION DEALS <br /> YOU LOVE
          </h2>
          <p className="pt-4 text-lg">
            Designed for the jet-setter in mind, our shirt is the ideal blend of
            comfort and style. Built for the man who’s in demand, this classic
            design will keep you looking presentable on the go, with a gentle
            fabric for all-day comfort. Because you won’t perform at your best
            if you’re irritated by your clothing. Our shirt is a sleek take on a
            well-loved classic featuring a tried-and-tested spread collar and a
            slim fit styling.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-[#ed4833] hover:from-[#ed4833] hover:to-purple-600  text-white font-bold py-2 px-6 rounded-full mt-8">
            Shop now
          </button>
        </div>

        <img
          className="object-cover h-76 w-96 py-8"
          src={banner}
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Hero;
