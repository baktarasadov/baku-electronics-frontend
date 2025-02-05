import React from "react";

const ProductFilter = ({ filterData, handleFilter }) => {
  return (
    <>
      <ul className=" flex justify-between px-[15px] gap-[28px] bg-white-smoke rounded-[25px] py-3 dark:bg-jet sm:px-[26px] items-center ">
        {filterData.map((el, index) => (
          <li
            onClick={() => handleFilter(el)}
            key={el + index}
            className="text-[10px] font-thin sm:text-[14px] opacity-50 text-jet hover:opacity-100 ease-in transition-opacity dark:text-white font-medium font-sfpro"
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductFilter;
