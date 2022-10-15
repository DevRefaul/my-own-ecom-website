import React from "react";
import { NavLink } from "react-router-dom";

const ProductsCategoryNav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to="/products/sneakers">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Sneakers
          </button>
        </NavLink>
        <NavLink to="/products/boots">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Boots
          </button>
        </NavLink>
        <NavLink to="/products/bags">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Bags
          </button>
        </NavLink>
        <NavLink to="/products/earphones">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Earphones
          </button>
        </NavLink>
        <NavLink to="/products/caps">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Caps
          </button>
        </NavLink>
        <NavLink to="/products/bottles">
          <button className="py-1 px-3 border-2 border-rose-300 rounded-lg">
            Bottles
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductsCategoryNav;
