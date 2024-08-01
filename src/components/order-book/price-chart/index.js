import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const PriceChart = () => {
  const { bids, offers } = useSelector((state) => state.orderBook);
  const getUniqueQuantities = () => {
    const allQuantities = [
      ...bids.map((item) => item.quantity.toString()),
      ...offers.map((item) => item.quantity.toString())
    ];
    return [...new Set(allQuantities)];
  };
  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    grid: {
      show: true,
      borderColor: `gray`,
      strokeDashArray: 10
    },
    xaxis: {
      categories: getUniqueQuantities()
    },
    stroke: {
      curve: 'smooth'
    },
    theme: {
      mode: 'dark'
    }
  };

  const series = [
    {
      name: 'Bids',
      data: bids.map((bid) => bid.price)
    },
    {
      name: 'Offers',
      data: offers.map((offer) => offer.price)
    }
  ];
  return <Chart options={options} series={series} type='line' height={350} />;
};

export default PriceChart;
