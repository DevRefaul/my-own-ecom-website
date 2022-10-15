import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product }) => {
  const { name, price, ratings, ratingsCount, seller } = product;
  return (
    <div>
      <div className="card card-compact w-full h-full bg-orange-50 shadow-xl rounded-lg">
        <figure className="p-2">
          <img
            className=" rounded-t-lg"
            src={product.img ? product.img : ""}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{name}</h2>
          <h6 className="font-bold">{seller}</h6>
          <p>
            <small className="text-lg font-semibold">
              {ratings}
              <FontAwesomeIcon
                icon={solid("star")}
                className="text-amber-400"
              />
              ({ratingsCount})
            </small>
          </p>
          <h2 className="text-2xl font-bold text-purple-400">{price}$</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
