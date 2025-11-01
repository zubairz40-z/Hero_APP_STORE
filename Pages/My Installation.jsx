import React, { useEffect, useState } from 'react';

const InstalledApp = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    alert('App uninstalled successfully');
  };

  const sortedApps = [...installedApps];
  if (sortOrder === 'high') {
    sortedApps.sort((a, b) => parseInt(b.size) - parseInt(a.size));
  } else if (sortOrder === 'low') {
    sortedApps.sort((a, b) => parseInt(a.size) - parseInt(b.size));
  }

  return (
    <div className="max-w-7xlxl mx-auto min-h-[70vh] p-5 ">
      <h1 className="text-3xl font-bold text-blue-950 mb-2 text-center mt-10">
        Your Installed Apps
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        Explore All Trending Apps on the Market developed by us.
      </p>

      <div className="flex justify-end mb-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sort By Size</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {sortedApps.length === 0 ? (
        <p className="text-gray-500 font-bold text-xl mt-5 text-center">
          No installed apps found
        </p>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-lg text-blue-950">
                    {app.title}
                  </h2>
                  <div className="text-sm text-gray-500 flex gap-4 mt-1">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>👥 {app.reviews}</span>
                    <span>📦 {app.size} MB</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledApp;
