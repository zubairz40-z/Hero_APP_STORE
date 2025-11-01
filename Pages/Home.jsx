import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { Download } from 'lucide-react';

const Home = () => {
  const [appsData, setAppsData] = useState([]);

  useEffect(() => {
    fetch('/appsData.json')
      .then((res) => res.json())
      .then((data) => setAppsData(data));
  }, []);
  return (
    <div>
      {/* Banner section */}
      <section className="items-center bg-base-200 text-center w-auto px-10 pt-10 mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          We Build <br />
          <span className=" bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] bg-clip-text text-transparent">
            Productive{' '}
          </span>{' '}
          Apps{' '}
        </h1>
        <p
          className="
        text-gray-500 text-lg mb-6 md:px-60 "
        >
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-3">
          <NavLink to="https://play.google.com/store/apps?hl=en">
            <button className="btn ">
              <FaGooglePlay ssize={20} /> PlayStore
            </button>
          </NavLink>
          <NavLink to="https://www.apple.com/app-store/">
            <button className="btn">
              <FaAppStore size={20} />
              App store
            </button>
          </NavLink>
        </div>

        <div className="flex justify-center mt-8">
          <img
            src=".././Assets/hero.png"
            alt="Hero"
            className="mx-auto w-[60%] md:w-p[40%]"
          />
        </div>
      </section>

      {/* states section */}

      <section className="text-center bg-base-200items-center p-10 mx-auto text-white bg-[linear-gradient(to_right,rgba(99,46,227,1),rgba(159,98,242,1))]">
        <h1 className="text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h1>
        <div className="flex flex-row justify-around items-center gap-8 max-w-5xl mx-auto">
          <div className="text-center ">
            <h2 className="text-gray-200 text-sm font-medium uppercase tracking-wide">
              Total Downloads
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold mt-1 text-white">
              26.9M
            </p>
            <p className="text-gray-300 text-sm mt-1">
              ↑ 21% more than last month
            </p>
          </div>

          <div className="text-center ">
            <h2 className="text-gray-200 text-sm font-medium uppercase tracking-wide">
              Total Reviews
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold mt-1 text-white">
              906K
            </p>
            <p className="text-gray-300 text-sm mt-1">
              ↑ 46% more than last month
            </p>
          </div>
          <div className="text-center ">
            <h2 className="text-gray-200 text-sm font-medium uppercase tracking-wide">
              Active Apps
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold mt-1 text-white">
              132+
            </p>
            <p className="text-gray-300 text-sm mt-1">31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* {trend app sections}
      <div></div> */}
      <section className="p-10 mx-auto bg-base-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Trending Apps</h2>
        <p className="text-center text-gray-500 mb-6">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {appsData.slice(0, 8).map((app) => (
            <NavLink
              key={app.id}
              to={`/apps/${app.id}`}
              className="bg-white backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-30 h-30 object-contain mb-3"
              />

              <h3 className="font-semibold text-lg  mb-1">{app.title}</h3>
              <div className="flex justify-between w-full">
                <p className="text-gray-400 text-sm mb-1">
                  <Download /> {app.downloads}
                </p>
                <p className="text-yellow-400 font-medium">{app.ratingAvg} ★</p>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <NavLink
            to="/apps"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold hover:scale-105 transition-transform duration-200"
          >
            Show All
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
