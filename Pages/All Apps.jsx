import React, { useState } from 'react';
import appsData from '../public/appsData.json';
import { Link } from 'react-router';

const Apps = () => {
  const [searchApp, setSearchApp] = useState('');

  const findApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchApp.toLowerCase())
  );

  return (
    <div className="bg-base-200 min-h-full">
      <section className="mx-auto p-10 max-w-7xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">Our All Application</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-row justify-between items-center gap-3 mb-10">
          <h3 className="text-lg font-semibold">(132)Apps Found</h3>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={searchApp}
                onChange={(e) => setSearchApp(e.target.value)}
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {findApps.length > 0 ? (
            findApps.map((app) => (
              <Link
                to={`/apps/${app.id}`}
                key={app.id}
                className="bg-white backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 object-contain mb-3"
                />
                <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
                <div className="flex justify-between w-full px-2">
                  <p className="text-gray-400 text-sm">
                    {app.downloads} Downloads
                  </p>
                  <p className="text-yellow-400 font-medium">
                    {app.ratingAvg} ★
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500 font-bold ">
              No App Found
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apps;
