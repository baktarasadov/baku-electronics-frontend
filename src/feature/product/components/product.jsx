"use client";
import React, { useState } from "react";
import ProductFilter from "./product-filter";
import ProductList from "./product-list";

export const Product = ({ specialOffers }) => {
  const [filteredProducts, setFilteredProducts] = useState(specialOffers[0]);

  const handleFilter = (filter) => {
    setFilteredProducts(specialOffers.find((offer) => offer.title === filter));
  };

  return (
    <>
      <div className=" features-section-container py-[40px]  sm:py-[95px]  ">
        <div className=" flex flex-col gap-[30px] justify-start sm:flex-row justify-between  features-top-container">
          <div className="flex flex-col ">
            <p className=" text-md font-sfpro text-red-cmyk ">
              Special Offers
            </p>
            <h2 className="text-[24px]">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <div className="filter flex items-end ">

            <ProductFilter
              filterData={specialOffers.map((el) => el.title)}
              handleFilter={handleFilter}
            />
          </div>
        </div>

        <div className="product-container py-[70px]">
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </>
  );
};
