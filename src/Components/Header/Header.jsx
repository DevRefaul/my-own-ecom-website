import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/UserContext";

const Header = () => {
  const userData = useContext(AuthContext);
  const { user, handleLogOut } = userData;
  console.log(user);

  return (
    <div className="bg-[#192746]">
      <div className="navbar md:w-[80%] mx-auto font-semibold text-amber-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Product</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                {user?.uid ? (
                  <>
                    <span className="text-purple-600">{user.email}</span>
                    <NavLink className="bg-white">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-accent md:hidden"
                      >
                        Log Out
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/login">
                      <button className="btn btn-ghost md:hidden">Login</button>
                    </NavLink>
                    <NavLink to="/register">
                      <button className="btn btn-accent text-white md:hidden">
                        Register
                      </button>
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Ema john ecom
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/" className="btn rounded-full">
            <FontAwesomeIcon
              className="text-white"
              icon={solid("cart-shopping")}
            />
          </NavLink>
          {user?.uid ? (
            <>
              <NavLink>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost hidden md:block"
                >
                  Log Out
                </button>
              </NavLink>
              <span className="text-white hidden md:block">{user.email}</span>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="btn btn-ghost hidden md:block">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn btn-accent text-white hidden md:block">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
