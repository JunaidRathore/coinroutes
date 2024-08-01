import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LadderView from './ladder';
import BestPricing from './best-pricing';
import CurrencyDropdown from './currency-dropdown';
import PriceChart from './price-chart';

import { updateOrderBook } from '../../redux/orderBookSlice';
import { updateLoader } from '../../redux/commonSlice';

const OrderBook = () => {
  const dispatch = useDispatch();
  const { product_id } = useSelector((state) => state.orderBook);
  useEffect(() => {
    let socket;
    let intervalId;

    const connectWebSocket = () => {
      socket = new WebSocket('wss://ws-feed.pro.coinbase.com');

      socket.onopen = () => {
        const msg = {
          type: 'subscribe',
          product_ids: [product_id],
          channels: ['level2_batch']
        };
        socket.send(JSON.stringify(msg));
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'snapshot') {
          const bids = data.bids
            .map(([price, quantity]) => ({
              price: parseFloat(price),
              quantity: parseFloat(quantity)
            }))
            .slice(0, 500);
          const offers = data.asks
            .map(([price, quantity]) => ({
              price: parseFloat(price),
              quantity: parseFloat(quantity)
            }))
            .slice(0, 500);
          dispatch(updateOrderBook({ bids, offers }));
          dispatch(updateLoader(false));
        }
      };

      socket.onclose = (event) => {
        console.log('Connection closed:', event);
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    };

    connectWebSocket();

    // Set up the interval to reconnect every 10 seconds
    intervalId = setInterval(() => {
      socket.close(); // Close the current connection
      connectWebSocket(); // Open a new connection
    }, 10000); // 10000 ms = 10 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
      if (socket) {
        socket.close(); // Close the socket connection
      }
    };
  }, [product_id, dispatch]);
  return (
    <div className='flex flex-col gap-5'>
      <CurrencyDropdown />
      <BestPricing />
      <PriceChart />
      <LadderView />
    </div>
  );
};

export default OrderBook;
