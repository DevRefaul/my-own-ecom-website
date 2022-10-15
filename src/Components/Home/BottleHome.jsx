import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const BottleHome = ({ slicedBottles }) => {
  return (
    <div>
      <h4 className="text-3xl font-bold py-4">Earphones</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {slicedBottles.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/products/bottles">
          <button className="btn btn-primary my-6">See All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default BottleHome;
