import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-9">
      <div className="col-span-7 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-28 pr-20 my-10">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="col-span-2 bg-red-100">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
