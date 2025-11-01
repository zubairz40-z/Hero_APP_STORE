import React from 'react';
import { NavLink } from 'react-router';
import Navbar from './../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl">
          <img
            src=".././Assets/error-404.png"
            alt=""
            srcset=""
            className="w-64 md:w-96 mx-auto mb-8"
          />
          <div className="items-center text-center">
            <h1 className="text-4xl font-bold md:text-5xl text-blue-950 mb-4">
              Oops,page not found!
            </h1>
            <p className="text-gray-500 mb-6 text-lg md:text-xl">
              The page you are looking is not available.
            </p>
            <NavLink to="/home">
              <button className="btn text-white bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] hover:scale-105 transition-transform duration-200">
                Back Home
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
