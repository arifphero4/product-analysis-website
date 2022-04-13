import React from "react";
import banner from "./../../image/car.jpg";

const Banner = () => {
  // const bannerStyles = {
  //   background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://i.ibb.co/hRK5QwF/photo-1552519507-da3b142c6e3d.jpg) no-repeat top center`,
  //   backgroundSize: "cover",
  //   zIndex: "-1",
  // };
  return (
    <div className="py-20 mt-8">
      <div className="container mx-auto pt-10 md:flex md:items-center md:justify-between px-3">
        <div style={{ maxWidth: "500px" }}>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pb-3 font-bold">
            The Way People Shop for Auto-Related{" "}
            <span className="text-red-700">Businesses</span>
          </h1>
          <p className=" font-bold text-lg">
            According to IHS Automotive, the number of vehicles on the road in
            the U.S. has reached a record level of almost 253 million. This is a
            level that the auto industry hasn’t seen in the U.S. since 2004-05.
            What does this mean to auto dealers and mechanics?
          </p>
          <button className="bg-gray-900 text-lg px-6 py-2 text-gray-50 hover:text-gray-300 hover:bg-red-700 mt-3 rounded-md transition-all duration-150 ease-linear">
            Explore Now
          </button>
        </div>
        <div className="w-full md:w-6/12 text-right">
          <img className="w-full md:w-8/12 ml-auto" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
