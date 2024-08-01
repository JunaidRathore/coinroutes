import React from 'react';
import { useSelector } from 'react-redux';

import DisplayData from './DisplayData';

const BestPricing = () => {
  const { bids, offers } = useSelector((state) => state.orderBook);
  return (
    <div className='flex flex-col sm:flex-row justify-center items-start'>
      <DisplayData title='Best Bid' bidData={bids} titleBgColor='bg-blue-500' />
      <DisplayData
        title='Best Ask'
        bidData={offers}
        titleBgColor='bg-green-500'
      />
    </div>
  );
};

export default BestPricing;
