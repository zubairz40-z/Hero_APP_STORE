import React, { useState } from 'react';
import { useParams } from 'react-router';
import appsData from '../public/appsData.json';
import { Toaster } from 'react-hot-toast';
import { Download, Star, UserStar } from 'lucide-react';
import RatingsChart from './../src/Components/Chart/chart';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const app = appsData.find((a) => a.id == appId);

  const installedApps = JSON.parse(
    localStorage.getItem('installedApps') || '[]'
  );

  const isInstalledAlready = installedApps.some((a) => a.id === appId);

  const [installed, setInstalled] = useState(isInstalledAlready);

  if (!app) {
    return <p className="text-center mt-10 font-bold">App Not Found</p>;
  }

  const handleInstall = () => {
    if (!installed) {
      const updatedApps = [...installedApps, app];
      localStorage.setItem('installedApps', JSON.stringify(updatedApps));

      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
      alert('App Installed successfully');
    }
  };

  const chartData = app.ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto p-5 sm:p-10 bg-base-200">
        <Toaster />
        <div className="flex flex-col md:flex-row items-center  gap-10">
          <img
            src={app.image}
            alt={app.title}
            className="w-28 h-28 md:w-40 md:h-40 object-contain "
          />

          <div className="flex-1">
            <h1 className="text-4xl text-purple-950 font-bold ml-5">
              {app.title}
            </h1>
            <p className="text-gray-500 ml-5">
              Developed by{' '}
              <span className="text-blue-500">{app.companyName}</span>{' '}
            </p>
            <div className="flex gap-10 mt-4">
              <p className="text-gray-500 flex items-center gap-2">
                <Download /> Downloads:
                <br />
                <span className="text-2xl font-bold  text-blue-950">
                  {app.downloads}
                </span>
              </p>

              <p className="text-yellow-400 flex items-center gap-2 ">
                <Star />
                Rating <br />
                <span className="text-2xl font-bold  text-blue-950">
                  {app.ratingAvg}
                </span>
              </p>

              <p className="text-gray-400 flex items-center gap-2">
                <UserStar /> Reviews: <br />
                <span className="text-2xl font-bold text-blue-950">
                  {app.reviews}
                </span>
              </p>
            </div>
            <button
              disabled={installed}
              onClick={handleInstall}
              className={`mt-4 w-full sm:w-auto px-6 py-2 rounded-lg text-white
                ${
                  installed
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-800'
                }`}
            >
              {installed ? 'Installed' : 'Install'}
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-2">Ratings</h2>
          {/* Pass app.ratings directly */}
          <RatingsChart ratings={app.ratings} />
        </div>
      </div>
      <div className="m-5 ">
        <h2 className="text-2xl font-semibold mb-2 text-blue-950 font-bold">
          Description
        </h2>
        <p className="text-gray-500">
          This app brings the entire marketplace to your fingertips. Whether
          you're browsing the latest fashion trends, upgrading your tech,
          stocking up on essentials, or hunting for unique gifts, everything you
          need is just a tap away.
          <br /> With a sleek interface and lightning-fast performance, you can
          explore thousands of products, read verified reviews, compare prices,
          and make secure purchases in seconds. Enjoy personalized
          recommendations tailored to your style and preferences, real-time
          order tracking, and exclusive deals you won’t find anywhere else.
          <br />
          The app supports multiple payment options, easy returns, and 24/7
          customer support to ensure a smooth and stress-free shopping
          experience. Designed for both casual shoppers and savvy deal hunters,
          this app is your go-to destination for quality, value, and
          convenience. Whether you're shopping from home, on the go, or during a
          quick break, it’s never been easier to find what you love and get it
          delivered fast.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
