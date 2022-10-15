import React from "react";
import { Link } from "react-router-dom";

const PromoOffer = () => {
  return (
    <div className="">
      <div className="p-6 py-12 bg-rose-100 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">Refaul</span>
            </div>
            <Link
              to="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border-2 block bg-purple-50 hover:bg-purple-300 hover:text-white dark:text-gray-900 dark:border-gray-400 font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoOffer;
