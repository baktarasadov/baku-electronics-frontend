import React from "react";
import ProductItem from "./product-item";

const ProductList = ({ filteredProducts }) => {
  console.log("filteredProducts", filteredProducts);
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-[15px] gap-y-[70px] justify-center">
        {filteredProducts.products?.map((el, index) => (
          <li key={el.id + index}>
            <ProductItem {...el}  />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
