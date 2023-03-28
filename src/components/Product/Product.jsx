import React from "react";

const Product = ({ product }) => {
  const { img, name, seller, quantity, price, ratings } = product;
  return (
    <div className="h-[460px] border border-gray-300 rounded-lg p-2 relative">
      <img className="rounded-lg" src={img} alt="product-image" />
      <span>
        <h6 className="text-lg font-semibold">{name}</h6>
        <p className="font-medium mb-5">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </span>

      <button className="bg-red-200 w-full absolute bottom-0 left-0 right-0 rounded-b-lg py-2">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
