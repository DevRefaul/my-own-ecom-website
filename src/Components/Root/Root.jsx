import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const ProductContext = React.createContext("");

const Root = () => {
  const data = useLoaderData();

  return (
    <ProductContext.Provider value={data}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
};

export default Root;
