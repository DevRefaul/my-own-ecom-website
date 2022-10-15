import React, { useContext } from "react";
import Product from "../Product/Product";
import { ProductContext } from "../Root/Root";

const AllProducts = () => {
  const allProducts = useContext(ProductContext);
  console.log(allProducts);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-6">All products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
