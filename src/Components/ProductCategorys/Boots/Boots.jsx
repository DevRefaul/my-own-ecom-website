import React, { useContext } from "react";
import Product from "../../Product/Product";
import { ProductContext } from "../../Root/Root";

const Boots = () => {
  const products = useContext(ProductContext);
  console.log(products);
  const boots = products.filter((product) => product.category === "Men's Boot");

  return (
    <div className="mb-20">
      <h2 className="text-center text-2xl font-bold my-6">All Boots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
        {boots.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Boots;
