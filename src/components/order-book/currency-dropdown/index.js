import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Select from '../../common/Select';

import { updateProductId } from '../../../redux/orderBookSlice';
import { updateLoader } from '../../../redux/commonSlice';

const CurrencyDropdown = () => {
  const [selectedPair, setSelectedPair] = useState('BTC-USD');
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    setSelectedPair(e.target.value);
    dispatch(updateLoader(true));
    dispatch(updateProductId(e.target.value));
  };
  return (
    <Select
      list={['BTC-USD', 'ETH-USD', 'LTC-USD', 'BCH-USD']}
      value={selectedPair}
      handleChange={handleSelect}
    />
  );
};

export default CurrencyDropdown;
