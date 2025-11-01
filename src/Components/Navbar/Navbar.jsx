import React from 'react';

import { Link, NavLink } from 'react-router';
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link to="/apps">Apps</Link>
            <li></li>
          </ul>
        </div>
        <a className="flex items-center gap-1 text-2xl font-bold">
          <img
            className="w-8 h-8"
            src=".././Assets/logo.png"
            alt="logo"
            srcset=""
          />{' '}
          <span className=" text-2xl bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] bg-clip-text text-transparent">
            Hero.IO
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-purple-500 underline'
                  : ' hover:text-purple-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? 'text-purple-500 underline'
                  : ' hover:text-purple-500'
              }
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installed"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-purple-500 underline'
                  : ' hover:text-purple-500'
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/zubairz40-z"
          className="btn text-white bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] hover:scale-105 transition-transform duration-200"
        >
          <Github className="w-5 h-5" /> Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
