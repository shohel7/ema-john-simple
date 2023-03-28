import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-9">
      <div className="col-span-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-28 pr-20 my-10">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="col-span-2 bg-amber-300 my-10 rounded-lg p-5 mx-20 md:mx-0">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
