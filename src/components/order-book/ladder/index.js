import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DisplayData from './DisplayData';
import Select from '../../common/Select';

const LadderView = () => {
  const [aggregation, setAggregation] = useState(0.01);
  const { bids, offers } = useSelector((state) => state.orderBook);

  const aggregateData = (data, increment) => {
    const aggregated = {};
    data.forEach((record) => {
      const price = Math.floor(record.price / increment) * increment;
      if (!aggregated[price]) aggregated[price] = 0;
      aggregated[price] += record.quantity;
    });
    return Object.entries(aggregated).map(([price, quantity]) => ({
      price,
      quantity
    }));
  };

  const aggregatedBids = aggregateData(bids, aggregation);
  const aggregatedOffers = aggregateData(offers, aggregation);

  return (
    <div className='flex flex-col gap-5'>
      <h2>Ladder View</h2>
      <Select
        list={[0.01, 0.05, 0.1]}
        value={aggregation}
        handleChange={(value) => setAggregation(parseFloat(value.target.value))}
      />
      <div className='flex h-screen'>
        <DisplayData title='Bids' items={aggregatedBids} />
        <DisplayData title='Offers' items={aggregatedOffers} />
      </div>
    </div>
  );
};

export default LadderView;
