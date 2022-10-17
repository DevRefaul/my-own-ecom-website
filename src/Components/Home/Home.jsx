import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../Hero/Hero";
import { ProductContext } from "../Root/Root";
import { TeamMembers } from "../TeamMembers/TeamMembers";
import TrustedCompanys from "../TrustedCompanys/TrustedCompanys";
import BagsHome from "./BagsHome";
import BottleHome from "./BottleHome";
import CapsHome from "./CapsHome";
import Earphones from "./Earphones";
import MensBoots from "./MensBoots";
import NewsLetter from "./NewsLetter";
import Offer from "./Offer";
import PromoOffer from "./PromoOffer";
import SnekaersHome from "./SnekaersHome";
import { Statistics } from "./Statistics";
import { Step } from "./Steps";

const Home = () => {
  const data = useContext(ProductContext);

  // mens sneakers data section
  const mensSneakers = data.filter(
    (product) => product.category === "Men's Sneaker"
  );
  const slicedSneakers = mensSneakers.slice(0, 5);

  // bags data section
  const bags = data.filter((product) => product.category === "Bag");
  const slicedBags = bags.slice(0, 5);

  // bags data section
  const boots = data.filter((product) => product.category === "Men's Boot");
  const slicedboots = boots.slice(0, 5);

  // caps data section
  const caps = data.filter((product) => product.category === "Cap");
  const slicedCaps = caps.slice(0, 5);

  // Earphones data section
  const earphones = data.filter((product) => product.category === "Earphones");
  const slicedEarphones = earphones.slice(0, 5);

  // Bottle data section
  const bottles = data.filter((product) => product.category === "Bottle");
  const slicedBottles = bottles.slice(0, 5);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={1000} />
      <div>
        {/* hero section */}
        <Hero />
        {/* hero section */}
        {/* offer 1 */}
        <Offer />
        {/* offer 1 */}

        {/* products section */}
        <div className="w-[80%] mx-auto">
          {/* mens snekaers seciton */}
          <div className="mt-8 mb-4">
            <SnekaersHome slicedSneakers={slicedSneakers} />
          </div>
          {/* mens snekaers seciton */}

          {/* mens boots seciton */}
          <div className="mt-8 mb-4">
            <MensBoots slicedboots={slicedboots} />
          </div>
          {/* mens boots seciton */}

          {/* bags section */}
          <div>
            <BagsHome slicedBags={slicedBags} />
          </div>
          {/* bags section */}

          {/* Special promo offer */}
          <div className="my-6">
            <PromoOffer />
          </div>
          {/* Special promo offer */}

          {/* caps section */}
          <div>
            <CapsHome slicedCaps={slicedCaps} />
          </div>
          {/* caps section*/}

          {/* earphones section */}
          <div>
            <Earphones slicedEarphones={slicedEarphones} />
          </div>
          {/* earphones section */}
          {/* earphones section */}
          <div>
            <BottleHome slicedBottles={slicedBottles} />
          </div>
          {/* earphones section */}
        </div>
        {/* products section */}

        {/* steps section */}
        <div className="bg-orange-50 mt-6">
          <Step />
        </div>
        {/* steps section */}

        {/* statics section  */}
        <div>
          <Statistics />
        </div>
        {/* statics section  */}

        {/* subscribe-to newsletter section */}
        <NewsLetter />
        {/* subscribe-to newsletter section */}

        {/* trusted companys */}
        <TrustedCompanys />
        {/* trusted companys */}

        {/* team members */}
        <TeamMembers />
        {/* team members */}
      </div>
    </div>
  );
};

export default Home;
