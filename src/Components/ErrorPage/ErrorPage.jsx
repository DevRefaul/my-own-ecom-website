import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import error from "./error.json";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="flex justify-center items-center h-[100vh] bg-yellow-50">
      <div className=" ">
        <div>
          <Lottie animationData={error} className="w-[40%] mx-auto" />
        </div>
        <div className="text-center">
          <h2 className="text-red-500 text-6xl font-bold my-4">{status}</h2>
          <p className="text-xl font-medium ">{statusText}</p>
          <p className="text-lg font-medium ">An unknown error has occured</p>
          <Link to="/home">
            <button className="btn btn-primary py-2 my-4">
              Go To Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
