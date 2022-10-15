import React from "react";
import { Outlet } from "react-router-dom";
import ProductsCategoryNav from "./ProductsCategoryNav";

const Products = () => {
  return (
    <div className="md:w-[90%] lg:w-[80%] mx-auto my-6">
      <ProductsCategoryNav />
      <Outlet />
    </div>
  );
};

export default Products;
