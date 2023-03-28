import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, seller, quantity, price, ratings } = product;

  return (
    <div className="h-[460px] border border-gray-300 rounded-lg p-2 relative">
      <img className="rounded-lg" src={img} alt="product-image" />
      <div>
        <h6 className="text-lg font-semibold mb-3">{name}</h6>
        <small className="font-bold mb-5">Price: ${price}</small>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="bg-amber-300 hover:transition duration-200 w-full absolute bottom-0 left-0 right-0 rounded-b-lg py-2 hover:bg-amber-500"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
