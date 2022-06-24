import React from "react";
import "../../index.css";

const Benefits = () => {
  return (
    <div className="grid grid-cols-3 divide-x text-center text-xl shadow-inner mb-2 px-6 py-2 text-mute sm:grid-cols-1 md:grid-cols-2 xs:text-sm">
      <div className="m-6 w-full-width">
        <i className="fa fa-truck fa-2x mb-2" aria-hidden="true"></i>
        <h1 className="font-semibold">FREE SHIPPING</h1>
        <p>For all orders above Ksh. 5000</p>
      </div>
      <div className="m-6 w-full-width">
        <i className="fa fa-clock-o fa-2x fa-spin mb-2" aria-hidden="true"></i>
        <h1 className="font-semibold">DELIVERY ON TIME</h1>
        <p>Fast delivery of goods</p>
      </div>
      <div className="m-6 w-full-width">
        <i className="fa fa-credit-card-alt fa-2x mb-2" aria-hidden="true"></i>
        <h1 className="font-semibold">SECURE PAYMENT</h1>
        <p>100% secure payment</p>
      </div>
    </div>
  );
};

export default Benefits;
