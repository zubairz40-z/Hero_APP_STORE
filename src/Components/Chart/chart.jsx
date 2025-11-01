import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RatingsChart = ({ ratings = [] }) => {
  if (!ratings.length) {
    return <p className="text-gray-500">No ratings data available.</p>;
  }

  const series = [
    {
      name: 'Ratings Count',
      data: ratings.map((r) => r.count),
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 500,
      width: 500,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ratings.map((r) => r.name),
    },
    colors: ['#facc16'],
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={350}
      width={600}
    />
  );
};

export default RatingsChart;
