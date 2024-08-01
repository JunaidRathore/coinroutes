import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from './components/common/Spinner';
import OrderBook from './components/order-book';

import './app.css';
const App = () => {
  const { loader } = useSelector((state) => state.common);
  return (
    <>
      <OrderBook />
      <Spinner isLoading={loader} />
    </>
  );
};

export default App;
