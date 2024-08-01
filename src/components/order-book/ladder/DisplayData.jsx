const DisplayData = ({ title, items }) => (
  <div className='flex-1 h-fit border p-4'>
    <div className='bg-blue-500 text-white p-2 mb-2 rounded-t-md'>{title}</div>
    <div className='h-[40vh] overflow-y-auto'>
      {items.map((item, index) => (
        <div
          key={index}
          className='flex justify-between py-1 border-b last:border-b-0'
        >
          <span>{item.quantity}</span>
          <span>${item.price}</span>
        </div>
      ))}
    </div>
  </div>
);
export default DisplayData;
