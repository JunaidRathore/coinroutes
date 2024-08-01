import { useSelector } from 'react-redux';

const Bid = ({ title, bidData, titleBgColor }) => {
  const { product_id } = useSelector((state) => state.orderBook);
  const data = bidData.reduce(
    (maxObj, currentObj) =>
      currentObj.price > maxObj.price ? currentObj : maxObj,
    bidData[0]
  );
  return (
    <div className='w-full sm:w-1/2 px-4 py-2'>
      <div
        className={`p-2 ${titleBgColor} text-white text-center rounded-t-md text-lg`}
      >
        {title} of {product_id}
      </div>
      <div className='border border-gray-300 rounded-b-md p-4 flex items-center justify-between bg-[#01192a]'>
        <div className='flex flex-col gap-1 items-start'>
          {' '}
          <span className='text-white text-lg'>{data?.price}</span>
          <span className='text-white text-sm'>Price</span>
        </div>
        <span className='h-[25px] w-px bg-gray-600 mx-4'></span>
        <div className='flex flex-col gap-1 items-end'>
          {' '}
          <span className='text-white text-lg'>{data?.quantity}</span>
          <span className='text-white text-sm'>Quantity</span>
        </div>
      </div>
    </div>
  );
};
export default Bid;
