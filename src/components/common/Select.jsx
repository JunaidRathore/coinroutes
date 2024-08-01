const Select = ({ value, handleChange, list }) => {
  return (
    <div className='relative inline-block w-64'>
      <select
        value={value}
        onChange={handleChange}
        className='block appearance-none w-full bg-[#01192a] border border-gray-700 text-white py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-[#022a42] focus:border-gray-500'
      >
        {list.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M10 12l-5-5h10l-5 5z' />
        </svg>
      </div>
    </div>
  );
};

export default Select;
